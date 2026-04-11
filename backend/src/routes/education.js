/**
 * Education Routes
 * Returns education history and details
 */

import { Router } from 'express';
import { educationData } from '../data/education.js';

const router = Router();

/**
 * GET /education
 * Returns all education records
 */
router.get('/', (req, res) => {
  res.json(educationData);
});

/**
 * GET /education/:id
 * Returns a specific education record by ID
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const education = educationData.find(e => e.id === parseInt(id));
  
  if (!education) {
    return res.status(404).json({
      success: false,
      message: `Education record with ID ${id} not found`
    });
  }
  
  res.json(education);
});

export default router;
