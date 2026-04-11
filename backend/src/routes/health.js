/**
 * Health Check Routes
 * Monitors server status and uptime
 */

import { Router } from 'express';

const router = Router();

/**
 * GET /health
 * Returns server status and uptime information
 */
router.get('/', (req, res) => {
  res.json({
    status: '✅ Server is running',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    uptime: `${(process.uptime() / 60).toFixed(2)} minutes`,
    message: 'Portfolio backend is operational'
  });
});

export default router;
