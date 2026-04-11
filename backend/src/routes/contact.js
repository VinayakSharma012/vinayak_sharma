/**
 * Contact Routes
 * Handles contact form submissions
 */

import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { validateContact } from '../middleware/validation.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const messagesFile = path.join(__dirname, '../data/messages.json');

const router = Router();

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
    fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
  } catch (error) {
    console.error('Error saving messages:', error);
  }
};

/**
 * POST /contact
 * Submits a contact form message
 */
router.post('/', validateContact, (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newMessage = {
      id: Date.now(),
      name,
      email,
      subject,
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

/**
 * GET /contact/admin/messages
 * Retrieve all messages (admin only)
 */
router.get('/admin/messages', (req, res) => {
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

/**
 * PATCH /contact/admin/messages/:id/read
 * Mark message as read
 */
router.patch('/admin/messages/:id/read', (req, res) => {
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

/**
 * DELETE /contact/admin/messages/:id
 * Delete a message
 */
router.delete('/admin/messages/:id', (req, res) => {
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
      message: 'Message deleted successfully'
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

export default router;
