/**
 * CENTRAL API CONFIGURATION & HTTP CLIENT
 * 
 * Provides unified request handling and seamless switching between
 * mock data and real FastAPI endpoints.
 */

// Base configuration for backend connection
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  USE_MOCK: true, // Toggle when backend endpoints are ready
  TIMEOUT_MS: 10000
};

/**
 * Generic API request wrapper with error handling and fallback capability
 */
export async function apiClient(endpoint, options = {}) {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.warn(`[apiClient] Fetch failed for ${endpoint}:`, error.message);
    throw error;
  }
}
