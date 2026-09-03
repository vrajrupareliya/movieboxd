import apiClient from './client';

export const reviewsApi = {
  /**
   * Get paginated reviews for a specific movie
   */
  getForMovie: async (movieId, page = 1, limit = 10) => {
    const response = await apiClient.get(`/movies/reviews/${movieId}/reviews`, {
      params: { page, limit },
    });
    // Backend returns ApiResponse(200, { message, success, count, totalCount, pagination, currentPage, totalPages, data: reviews })
    const resData = response.data?.data;
    return {
      reviews: Array.isArray(resData?.data) ? resData.data : Array.isArray(resData) ? resData : [],
      totalPages: resData?.totalPages || 1,
      currentPage: resData?.currentPage || page,
      totalCount: resData?.totalCount || 0,
    };
  },

  /**
   * Add a review for a movie
   */
  create: async (movieId, { rating, comment }) => {
    const response = await apiClient.post(`/movies/reviews/${movieId}/addReview`, {
      rating: Number(rating),
      comment: comment?.trim() || '',
    });
    return response.data?.data?.data || response.data?.data;
  },

  /**
   * Get a single review by its ID
   */
  getById: async (reviewId) => {
    const response = await apiClient.get(`/movies/reviews/${reviewId}/getReview`);
    return response.data?.data?.data || response.data?.data;
  },

  /**
   * Update an existing review
   */
  update: async (reviewId, { rating, comment }) => {
    const response = await apiClient.put(`/movies/reviews/${reviewId}/updateReview`, {
      rating: Number(rating),
      comment: comment?.trim() || '',
    });
    return response.data?.data?.data || response.data?.data;
  },

  /**
   * Delete a review
   */
  delete: async (reviewId) => {
    const response = await apiClient.delete(`/movies/reviews/${reviewId}/deleteReview`);
    return response.data?.data;
  },

  /**
   * Get paginated reviews written by a specific user
   */
  getUserReviews: async (userId, page = 1, limit = 10) => {
    const response = await apiClient.get(`/users/${userId}/reviews`, {
      params: { page, limit },
    });
    const resData = response.data?.data;
    return {
      reviews: Array.isArray(resData?.data) ? resData.data : Array.isArray(resData) ? resData : [],
      totalPages: resData?.totalPages || 1,
      currentPage: resData?.currentPage || page,
      totalCount: resData?.totalCount || 0,
    };
  },
};

export default reviewsApi;
