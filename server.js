/**
 * Full-Stack Portfolio Server
 * Serves both frontend (React) and backend (Express API)
 */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
dotenv.config();

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import backend middleware
import { 
  errorHandler, 
  notFoundHandler, 
  requestLogger 
} from './backend/src/middleware/errorHandler.js';

// Import backend routes
import healthRoutes from './backend/src/routes/health.js';
import portfolioRoutes from './backend/src/routes/portfolio.js';
import educationRoutes from './backend/src/routes/education.js';
import skillsRoutes from './backend/src/routes/skills.js';
import projectsRoutes from './backend/src/routes/projects.js';
import certificationsRoutes from './backend/src/routes/certifications.js';
import contactRoutes from './backend/src/routes/contact.js';

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// ============================================================================
// MIDDLEWARE
// ============================================================================

// Log requests
app.use(requestLogger);

// CORS - Allow frontend to communicate with backend
app.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============================================================================
// API ROUTES
// ============================================================================

// Mount API routes
app.use('/api/health', healthRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/certifications', certificationsRoutes);
app.use('/api/contact', contactRoutes);

// ============================================================================
// STATIC FRONTEND
// ============================================================================

// Serve frontend static files (built React app)
const frontendDistPath = join(__dirname, 'frontend/dist');
app.use(express.static(frontendDistPath));

// SPA fallback - serve index.html for all non-API routes
app.get('*', (req, res) => {
  // Don't serve index.html for API routes
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API endpoint not found' });
  }
  res.sendFile(join(frontendDistPath, 'index.html'));
});

// ============================================================================
// ERROR HANDLING
// ============================================================================

// 404 handler for undefined routes
app.use(notFoundHandler);

// Global error handler
app.use(errorHandler);

// ============================================================================
// SERVER STARTUP
// ============================================================================

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`
╔════════════════════════════════════════════════════════════════════════╗
║           🚀 FULL-STACK PORTFOLIO SERVER STARTED                       ║
╚════════════════════════════════════════════════════════════════════════╝

📊 SERVER INFORMATION:
   • Address: http://localhost:${PORT}
   • Environment: ${NODE_ENV}
   • Frontend: Serving from ${frontendDistPath}
   • Status: ✅ Ready

📚 AVAILABLE ENDPOINTS:
   • Frontend: http://localhost:${PORT}/
   • API: http://localhost:${PORT}/api/

🔗 ROUTES:
   GET  /api/health                → Server status
   GET  /api/portfolio            → Portfolio data
   GET  /api/education            → Education history
   GET  /api/skills               → Skills
   GET  /api/projects             → Projects
   GET  /api/certifications       → Certifications
   POST /api/contact              → Submit contact form

═════════════════════════════════════════════════════════════════════════
  `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('\n📴 Shutting down gracefully...');
  server.close(() => {
    console.log('✅ Server closed');
    process.exit(0);
  });
});

export default app;
