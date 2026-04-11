/**
 * Certifications Routes
 * Returns professional certifications and credentials
 */

import { Router } from 'express';
import { certificationsData } from '../data/certifications.js';

const router = Router();

/**
 * GET /certifications
 * Returns all certifications
 */
router.get('/', (req, res) => {
  res.json(certificationsData);
});

/**
 * GET /certifications/:id
 * Returns a specific certification by ID
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const certification = certificationsData.find(c => c.id === parseInt(id));
  
  if (!certification) {
    return res.status(404).json({
      success: false,
      message: `Certification with ID ${id} not found`
    });
  }
  
  res.json(certification);
});

export default router;
