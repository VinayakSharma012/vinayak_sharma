/**
 * Portfolio Routes
 * Returns portfolio owner information
 */

import { Router } from 'express';
import { portfolioData } from '../data/portfolio.js';

const router = Router();

/**
 * GET /portfolio
 * Returns portfolio owner's information
 */
router.get('/', (req, res) => {
  res.json(portfolioData);
});

export default router;
