import apiClient from './client';

export const socialApi = {
  /**
   * Get user's film diary (chronological logged reviews)
   */
  getDiary: async (page = 1, limit = 10) => {
    const response = await apiClient.get('/users/me/diary', {
      params: { page, limit },
    });
    const resData = response.data?.data;
    return {
      entries: Array.isArray(resData?.data) ? resData.data : Array.isArray(resData) ? resData : [],
      totalPages: resData?.totalPages || 1,
      currentPage: resData?.currentPage || page,
      totalCount: resData?.totalCount || 0,
    };
  },

  /**
   * Get activity feed from followed users
   */
  getFeed: async (page = 1, limit = 10) => {
    const response = await apiClient.get('/users/me/feed', {
      params: { page, limit },
    });
    const resData = response.data?.data;
    return {
      items: Array.isArray(resData?.data) ? resData.data : Array.isArray(resData) ? resData : [],
      totalPages: resData?.totalPages || 1,
      currentPage: resData?.currentPage || page,
      totalCount: resData?.totalCount || 0,
    };
  },

  /**
   * Follow a user
   */
  followUser: async (userId) => {
    const response = await apiClient.post(`/users/${userId}/follow`);
    return response.data?.data;
  },

  /**
   * Unfollow a user
   */
  unfollowUser: async (userId) => {
    const response = await apiClient.delete(`/users/${userId}/unfollow`);
    return response.data?.data;
  },

  /**
   * Get followers list for a user
   */
  getFollowers: async (userId, page = 1, limit = 10) => {
    const response = await apiClient.get(`/users/${userId}/followers`, {
      params: { page, limit },
    });
    const resData = response.data?.data;
    return {
      followers: Array.isArray(resData?.data) ? resData.data : Array.isArray(resData) ? resData : [],
      totalPages: resData?.totalPages || 1,
      currentPage: resData?.currentPage || page,
      totalCount: resData?.totalCount || 0,
    };
  },

  /**
   * Get following list for a user
   */
  getFollowing: async (userId, page = 1, limit = 10) => {
    const response = await apiClient.get(`/users/${userId}/following`, {
      params: { page, limit },
    });
    const resData = response.data?.data;
    return {
      following: Array.isArray(resData?.data) ? resData.data : Array.isArray(resData) ? resData : [],
      totalPages: resData?.totalPages || 1,
      currentPage: resData?.currentPage || page,
      totalCount: resData?.totalCount || 0,
    };
  },
};

export default socialApi;
