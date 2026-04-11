/**
 * Error Handling Middleware
 * Centralized error handling for all routes
 */

export const errorHandler = (err, req, res, next) => {
  // Log error for debugging
  console.error('❌ Error:', err.message);
  
  // Default error response
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  // Send error response
  res.status(statusCode).json({
    success: false,
    message,
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};

/**
 * 404 Not Found Middleware
 * Handles requests to undefined routes
 */
export const notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
    path: req.path,
    method: req.method,
    suggestion: 'Check the API documentation for available endpoints'
  });
};

/**
 * Request Logging Middleware
 * Logs incoming requests for debugging
 */
export const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`📨 [${timestamp}] ${req.method} ${req.path}`);
  next();
};

/**
 * Response Wrapper Middleware
 * Standardizes successful responses
 */
export const responseWrapper = (req, res, next) => {
  // Store original send method
  const originalSend = res.send;
  
  // Override send to wrap response
  res.send = function(data) {
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }
    
    if (data && !data.success) {
      return originalSend.call(this, JSON.stringify(data));
    }
    
    res.type('json');
    return originalSend.call(this, JSON.stringify({
      success: true,
      data
    }));
  };
  
  next();
};
