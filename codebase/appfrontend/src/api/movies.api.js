import apiClient from './client';

export const moviesApi = {
  /**
   * Fetch popular movies list
   */
  getPopular: async () => {
    const response = await apiClient.get('/movies/popular');
    return response.data?.data || [];
  },

  /**
   * Search movies by title keyword
   */
  search: async (query) => {
    if (!query || !query.trim()) return [];
    const response = await apiClient.get(`/movies/search`, {
      params: { query: query.trim() },
    });
    return response.data?.data || [];
  },

  /**
   * Get single movie details by MongoDB ID
   */
  getById: async (movieId) => {
    const response = await apiClient.get(`/movies/${movieId}`);
    return response.data?.data;
  },
};

export default moviesApi;
