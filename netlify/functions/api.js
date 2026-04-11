import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Import routes
import healthRoutes from '../../backend/src/routes/health.js';
import portfolioRoutes from '../../backend/src/routes/portfolio.js';
import educationRoutes from '../../backend/src/routes/education.js';
import skillsRoutes from '../../backend/src/routes/skills.js';
import projectsRoutes from '../../backend/src/routes/projects.js';
import certificationsRoutes from '../../backend/src/routes/certifications.js';
import contactRoutes from '../../backend/src/routes/contact.js';
import { errorHandler, notFoundHandler } from '../../backend/src/middleware/errorHandler.js';

// Create Express app
const app = express();

// CORS configuration
app.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/health', healthRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/certifications', certificationsRoutes);
app.use('/api/contact', contactRoutes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Netlify Functions handler
export default app;
