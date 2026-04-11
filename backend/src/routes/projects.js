/**
 * Projects Routes
 * Returns featured projects with details
 */

import { Router } from 'express';
import { projectsData } from '../data/projects.js';

const router = Router();

/**
 * GET /projects
 * Returns all featured projects
 */
router.get('/', (req, res) => {
  res.json(projectsData);
});

/**
 * GET /projects/:id
 * Returns a specific project by ID
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const project = projectsData.find(p => p.id === parseInt(id));
  
  if (!project) {
    return res.status(404).json({
      success: false,
      message: `Project with ID ${id} not found`
    });
  }
  
  res.json(project);
});

/**
 * GET /projects/type/:type
 * Returns projects filtered by type
 */
router.get('/type/:type', (req, res) => {
  const { type } = req.params;
  const filteredProjects = projectsData.filter(p => 
    p.type.toLowerCase() === type.toLowerCase()
  );
  
  if (filteredProjects.length === 0) {
    return res.status(404).json({
      success: false,
      message: `No projects found with type '${type}'`,
      availableTypes: [...new Set(projectsData.map(p => p.type))]
    });
  }
  
  res.json(filteredProjects);
});

export default router;
