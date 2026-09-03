import apiClient from './client';

export const authApi = {
  /**
   * Log in user with either username or email and password
   */
  login: async ({ username, email, password }) => {
    const payload = {};
    if (username) payload.username = username.trim();
    if (email) payload.email = email.trim();
    payload.password = password;

    const response = await apiClient.post('/users/login', payload);
    // Backend returns: ApiResponse(200, { user: loginUser, accessToken, refreshToken }, "user loggedin sucessfully")
    return response.data?.data;
  },

  /**
   * Register a new user
   */
  register: async ({ username, email, password }) => {
    const response = await apiClient.post('/users/register', {
      username: username.trim().toLowerCase(),
      email: email.trim().toLowerCase(),
      password,
    });
    return response.data?.data;
  },

  /**
   * Log out currently authenticated user
   */
  logout: async () => {
    try {
      await apiClient.post('/users/logout');
    } catch {
      // Ignore logout errors, local storage is cleared anyway
    }
  },

  /**
   * Fetch current authenticated user's profile
   */
  getMe: async () => {
    const response = await apiClient.get('/users/me/profile');
    return response.data?.data?.data || response.data?.data;
  },

  /**
   * Update logged-in user profile
   */
  updateProfile: async (userData) => {
    const response = await apiClient.put('/users/me/update', userData);
    return response.data?.data?.data || response.data?.data;
  },
};

export default authApi;
