/**
 * Portfolio Backend Server
 * Full-stack Express.js server for Vinayak Sharma's portfolio
 * 
 * This is the main entry point that orchestrates all routes and middleware
 */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Import middleware
import { 
  errorHandler, 
  notFoundHandler, 
  requestLogger 
} from './src/middleware/errorHandler.js';

// Import routes
import healthRoutes from './src/routes/health.js';
import portfolioRoutes from './src/routes/portfolio.js';
import educationRoutes from './src/routes/education.js';
import skillsRoutes from './src/routes/skills.js';
import projectsRoutes from './src/routes/projects.js';
import certificationsRoutes from './src/routes/certifications.js';
import contactRoutes from './src/routes/contact.js';

// Load environment variables
dotenv.config();

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3001';

// ============================================================================
// MIDDLEWARE CONFIGURATION
// ============================================================================

// Log all requests
app.use(requestLogger);

// CORS configuration - Allow frontend to communicate with backend
app.use(cors({
  origin: CORS_ORIGIN,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============================================================================
// ROUTE MOUNTING
// ============================================================================

// Mount API routes with descriptive prefixes
app.use('/api/health', healthRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/certifications', certificationsRoutes);
app.use('/api/contact', contactRoutes);

// ============================================================================
// ERROR HANDLING
// ============================================================================

// 404 handler for undefined routes (must be after all routes)
app.use(notFoundHandler);

// Global error handler (must be last)
app.use(errorHandler);

// ============================================================================
// SERVER STARTUP
// ============================================================================

// Start the server
const server = app.listen(PORT, () => {
  const banner = `
╔════════════════════════════════════════════════════════════════════════╗
║                  🚀 PORTFOLIO BACKEND SERVER STARTED                   ║
╚════════════════════════════════════════════════════════════════════════╝

📊 SERVER INFORMATION:
   • Address: http://localhost:${PORT}
   • Environment: ${NODE_ENV}
   • CORS Origin: ${CORS_ORIGIN}
   • Status: ✅ Ready to accept requests

📚 AVAILABLE API ENDPOINTS:

   Health & Status:
   ✓ GET  /api/health              → Server status

   Portfolio Data:
   ✓ GET  /api/portfolio           → Your information
   ✓ GET  /api/education          → Education history
   ✓ GET  /api/education/:id      → Specific education
   ✓ GET  /api/skills             → All skills
   ✓ GET  /api/skills/:category   → Skills by category
   ✓ GET  /api/projects           → All projects
   ✓ GET  /api/projects/:id       → Specific project
   ✓ GET  /api/projects/type/:type → Projects by type
   ✓ GET  /api/certifications     → All certifications
   ✓ GET  /api/certifications/:id → Specific certification

   Contact & Forms:
   ✓ POST /api/contact            → Submit contact form

💡 QUICK TEST:
   curl http://localhost:${PORT}/api/health
   curl http://localhost:${PORT}/api/portfolio
   curl -X POST http://localhost:${PORT}/api/contact \\
     -H "Content-Type: application/json" \\
     -d '{"name":"John","email":"john@example.com","subject":"Hi","message":"Hello"}'

🔗 Frontend URL: ${CORS_ORIGIN}

═════════════════════════════════════════════════════════════════════════
  `;
  
  console.log(banner);
});

// ============================================================================
// GRACEFUL SHUTDOWN
// ============================================================================

// Handle server shutdown gracefully
process.on('SIGTERM', () => {
  console.log('\n📴 SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('✅ HTTP server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('\n📴 SIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('✅ HTTP server closed');
    process.exit(0);
  });
});

export default app;
