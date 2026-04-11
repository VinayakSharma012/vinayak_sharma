// API Service - Frontend to Backend Communication
// In production, uses relative path (same domain)
// In development, uses localhost:4000
const API_BASE_URL = window.location.origin === 'http://localhost:3001' || window.location.origin === 'http://localhost:5173'
  ? 'http://localhost:4000/api'
  : `${window.location.origin}/api`;

// Helper function to make API calls with error handling
const apiCall = async (endpoint, options = {}) => {
  try {
    console.log(`🔄 API Call: ${options.method || 'GET'} ${endpoint}`);
    
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    console.log(`📥 Response Status: ${response.status}`);
    
    const data = await response.json();
    console.log(`📥 Response Data:`, data);

    // Always return the data, regardless of status code
    // The component will handle success/failure based on response.success flag
    return data;
    
  } catch (error) {
    console.error(`❌ API Call Error (${endpoint}):`, error.message);
    throw error;
  }
};

// Portfolio API calls
export const portfolioAPI = {
  // Get portfolio information
  getPortfolio: () => apiCall('/portfolio'),

  // Get all education records
  getEducation: () => apiCall('/education'),

  // Get all skills
  getSkills: () => apiCall('/skills'),

  // Get all projects
  getProjects: () => apiCall('/projects'),

  // Get all certifications
  getCertifications: () => apiCall('/certifications'),

  // Submit contact form
  submitContact: (formData) =>
    apiCall('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    }),

  // Get server health status
  getHealth: () => apiCall('/health'),
};

export default portfolioAPI;
