/**
 * API Configuration
 * Handles API calls to backend
 */

// In production on Netlify, uses relative path to serverless functions
// In development, uses localhost backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

/**
 * Fetch portfolio information
 */
export const fetchPortfolio = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/portfolio`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    throw error;
  }
};

/**
 * Fetch education data
 */
export const fetchEducation = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/education`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching education:', error);
    throw error;
  }
};

/**
 * Fetch skills data
 */
export const fetchSkills = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/skills`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching skills:', error);
    throw error;
  }
};

/**
 * Fetch projects data
 */
export const fetchProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/projects`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

/**
 * Fetch certifications data
 */
export const fetchCertifications = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/certifications`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching certifications:', error);
    throw error;
  }
};

/**
 * Send contact message
 */
export const sendContactMessage = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

/**
 * Health check - verify backend is running
 */
export const healthCheck = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error health check:', error);
    return { status: 'disconnected' };
  }
};

export default {
  fetchPortfolio,
  fetchEducation,
  fetchSkills,
  fetchProjects,
  fetchCertifications,
  sendContactMessage,
  healthCheck,
};
