import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor: attach token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && token !== 'undefined' && token !== 'null') {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: extract error message & handle 401
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // If token expired or unauthorized on protected routes
      // Note: Don't forcefully redirect on public routes
      const currentPath = window.location.pathname;
      const isPublic = ['/login', '/register', '/', '/search'].includes(currentPath) || currentPath.startsWith('/movies/');
      if (!isPublic && !currentPath.startsWith('/users/')) {
        localStorage.removeItem('token');
      }
    }

    const message =
      error.response?.data?.massage ||
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      'An unexpected error occurred. Please try again.';

    const enhancedError = new Error(message);
    enhancedError.statusCode = error.response?.status || 500;
    enhancedError.response = error.response;
    return Promise.reject(enhancedError);
  }
);

export default apiClient;
