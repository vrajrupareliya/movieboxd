import apiClient from './client';

export const usersApi = {
  /**
   * Get public profile for any user by userId
   */
  getUserProfile: async (userId) => {
    const response = await apiClient.get(`/users/${userId}`);
    return response.data?.data?.data || response.data?.data;
  },
};

export default usersApi;
