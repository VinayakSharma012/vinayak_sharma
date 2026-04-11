/**
 * Validation Middleware
 * Validates incoming request data
 */

/**
 * Validate contact form submission
 */
export const validateContact = (req, res, next) => {
  const { name, email, subject, message } = req.body;

  // Check required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
      missingFields: {
        name: !name,
        email: !email,
        subject: !subject,
        message: !message
      }
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email address format'
    });
  }

  // Validate string lengths
  if (name.length < 2 || name.length > 100) {
    return res.status(400).json({
      success: false,
      message: 'Name must be between 2 and 100 characters'
    });
  }

  if (message.length < 10 || message.length > 5000) {
    return res.status(400).json({
      success: false,
      message: 'Message must be between 10 and 5000 characters'
    });
  }

  // Validation passed, continue to next middleware
  next();
};
