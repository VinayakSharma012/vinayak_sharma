import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

// Get directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create Express app
const app = express();

// CORS
app.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Messages file path
const messagesFile = path.join(__dirname, '../../backend/src/data/messages.json');

// Helper to read messages
const readMessages = () => {
  try {
    if (fs.existsSync(messagesFile)) {
      return JSON.parse(fs.readFileSync(messagesFile, 'utf-8'));
    }
  } catch (error) {
    console.error('Error reading messages:', error);
  }
  return [];
};

// Helper to save messages
const saveMessages = (messages) => {
  try {
    // Ensure directory exists
    const dir = path.dirname(messagesFile);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
  } catch (error) {
    console.error('Error saving messages:', error);
  }
};

// POST contact - submit message
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    const newMessage = {
      id: Date.now(),
      name,
      email,
      subject: subject || '',
      message,
      receivedAt: new Date().toISOString(),
      read: false
    };

    // Save message
    const messages = readMessages();
    messages.push(newMessage);
    saveMessages(messages);

    console.log('📧 Contact Form Submission:', newMessage);

    res.status(200).json({
      success: true,
      message: '✅ Thank you for your message! I will get back to you soon.',
      data: newMessage
    });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing contact form',
      error: error.message
    });
  }
});

// GET admin messages
app.get('/api/contact/admin/messages', (req, res) => {
  try {
    const messages = readMessages();
    res.status(200).json({
      success: true,
      count: messages.length,
      messages: messages.sort((a, b) => new Date(b.receivedAt) - new Date(a.receivedAt))
    });
  } catch (error) {
    console.error('❌ Error fetching messages:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching messages',
      error: error.message
    });
  }
});

// PATCH mark as read
app.patch('/api/contact/admin/messages/:id/read', (req, res) => {
  try {
    const messageId = parseInt(req.params.id);
    const messages = readMessages();
    const message = messages.find(m => m.id === messageId);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Message not found'
      });
    }

    message.read = true;
    saveMessages(messages);

    res.status(200).json({
      success: true,
      message: 'Message marked as read',
      data: message
    });
  } catch (error) {
    console.error('❌ Error updating message:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating message',
      error: error.message
    });
  }
});

// DELETE message
app.delete('/api/contact/admin/messages/:id', (req, res) => {
  try {
    const messageId = parseInt(req.params.id);
    let messages = readMessages();
    const initialLength = messages.length;
    messages = messages.filter(m => m.id !== messageId);

    if (messages.length === initialLength) {
      return res.status(404).json({
        success: false,
        message: 'Message not found'
      });
    }

    saveMessages(messages);

    res.status(200).json({
      success: true,
      message: 'Message deleted'
    });
  } catch (error) {
    console.error('❌ Error deleting message:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting message',
      error: error.message
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Export for Netlify
export default app;
