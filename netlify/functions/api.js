import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

// Main handler
export default async (req, context) => {
  // CORS headers
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  const url = new URL(req.url);
  const pathname = url.pathname;

  try {
    // POST /api/contact - submit message
    if (pathname.endsWith('/api/contact') && req.method === 'POST') {
      const body = await req.json();
      const { name, email, subject, message } = body;

      if (!name || !email || !message) {
        return new Response(
          JSON.stringify({
            success: false,
            message: 'Missing required fields'
          }),
          { status: 400, headers }
        );
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

      return new Response(
        JSON.stringify({
          success: true,
          message: '✅ Thank you for your message! I will get back to you soon.',
          data: newMessage
        }),
        { status: 200, headers }
      );
    }

    // GET /api/contact/admin/messages - get all messages
    if (pathname.endsWith('/api/contact/admin/messages') && req.method === 'GET') {
      const messages = readMessages();
      return new Response(
        JSON.stringify({
          success: true,
          count: messages.length,
          messages: messages.sort((a, b) => new Date(b.receivedAt) - new Date(a.receivedAt))
        }),
        { status: 200, headers }
      );
    }

    // PATCH /api/contact/admin/messages/:id/read - mark as read
    if (pathname.includes('/api/contact/admin/messages/') && pathname.includes('/read') && req.method === 'PATCH') {
      const id = pathname.split('/')[5];
      const messageId = parseInt(id);
      const messages = readMessages();
      const message = messages.find(m => m.id === messageId);

      if (!message) {
        return new Response(
          JSON.stringify({ success: false, message: 'Message not found' }),
          { status: 404, headers }
        );
      }

      message.read = true;
      saveMessages(messages);

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Message marked as read',
          data: message
        }),
        { status: 200, headers }
      );
    }

    // DELETE /api/contact/admin/messages/:id - delete message
    if (pathname.includes('/api/contact/admin/messages/') && req.method === 'DELETE' && !pathname.includes('/read')) {
      const id = pathname.split('/')[5];
      const messageId = parseInt(id);
      let messages = readMessages();
      const initialLength = messages.length;
      messages = messages.filter(m => m.id !== messageId);

      if (messages.length === initialLength) {
        return new Response(
          JSON.stringify({ success: false, message: 'Message not found' }),
          { status: 404, headers }
        );
      }

      saveMessages(messages);

      return new Response(
        JSON.stringify({ success: true, message: 'Message deleted' }),
        { status: 200, headers }
      );
    }

    // GET /api/health - health check
    if (pathname.endsWith('/api/health') && req.method === 'GET') {
      return new Response(
        JSON.stringify({ status: 'ok' }),
        { status: 200, headers }
      );
    }

    // 404
    return new Response(
      JSON.stringify({ success: false, message: 'Not found' }),
      { status: 404, headers }
    );
  } catch (error) {
    console.error('❌ API Error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Server error',
        error: error.message
      }),
      { status: 500, headers }
    );
  }
};
