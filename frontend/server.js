import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;
const distDir = path.join(__dirname, 'dist');

// Serve static files from dist directory
app.use(express.static(distDir));

// SPA fallback - serve index.html for all other routes
app.use((req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send('Server error');
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Frontend server running on http://localhost:${PORT}`);
  console.log(`📁 Serving from: ${distDir}`);
});

server.on('error', (err) => {
  console.error('Server error:', err);
  process.exit(1);
});
