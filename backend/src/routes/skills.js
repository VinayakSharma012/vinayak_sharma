/**
 * Skills Routes
 * Returns technical skills categorized by type
 */

import { Router } from 'express';
import { skillsData } from '../data/skills.js';

const router = Router();

/**
 * GET /skills
 * Returns all skills organized by category
 */
router.get('/', (req, res) => {
  res.json(skillsData);
});

/**
 * GET /skills/:category
 * Returns skills for a specific category
 */
router.get('/:category', (req, res) => {
  const { category } = req.params;
  const categoryKey = category.toLowerCase();
  
  if (!skillsData[categoryKey]) {
    return res.status(404).json({
      success: false,
      message: `Skill category '${category}' not found`,
      availableCategories: Object.keys(skillsData)
    });
  }
  
  res.json({
    category: categoryKey,
    skills: skillsData[categoryKey]
  });
});

export default router;
