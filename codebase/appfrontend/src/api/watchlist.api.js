import apiClient from './client';

export const watchlistApi = {
  /**
   * Get the logged-in user's populated watchlist
   */
  getWatchlist: async () => {
    const response = await apiClient.get('/users/me/watchlist');
    return response.data?.data?.data || response.data?.data || [];
  },

  /**
   * Add a movie to watchlist
   */
  add: async (movieId) => {
    const response = await apiClient.post(`/users/me/watchlist/${movieId}`);
    return response.data?.data?.data || response.data?.data;
  },

  /**
   * Remove a movie from watchlist
   */
  remove: async (movieId) => {
    const response = await apiClient.delete(`/users/me/watchlist/${movieId}`);
    return response.data?.data?.data || response.data?.data;
  },
};

export default watchlistApi;
