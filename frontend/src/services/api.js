// API Service - Frontend to Backend Communication
const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();
const isLocalhost = ['localhost', '127.0.0.1'].includes(window.location.hostname);
const API_BASE_URL = (configuredApiUrl || (isLocalhost ? 'http://localhost:4000/api' : '/api'))
  .replace(/\/+$/, '');

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

    if (!response.ok) {
      throw new Error(data.message || `Request failed with status ${response.status}`);
    }

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

export const adminAPI = {
  getMessages: () => apiCall('/contact/admin/messages'),
  markMessageAsRead: (id) => apiCall(`/contact/admin/messages/${id}/read`, {
    method: 'PATCH',
  }),
  deleteMessage: (id) => apiCall(`/contact/admin/messages/${id}`, {
    method: 'DELETE',
  }),
};

export default portfolioAPI;
