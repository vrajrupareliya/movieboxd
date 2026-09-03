import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { authApi } from '../api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  // Restore authenticated session on app mount
  const verifySession = useCallback(async () => {
    const storedToken = localStorage.getItem('token');
    if (storedToken && storedToken !== 'undefined' && storedToken !== 'null') {
      setToken(storedToken);
      try {
        const userData = await authApi.getMe();
        setUser(userData);
      } catch (error) {
        console.warn('Session restoration failed:', error.message);
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
      }
    } else {
      localStorage.removeItem('token');
      setToken(null);
      setUser(null);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    verifySession();
  }, [verifySession]);

  /**
   * Log in user with username/email and password
   */
  const login = async (identifier, password) => {
    const isEmail = identifier.includes('@');
    const payload = isEmail
      ? { email: identifier, password }
      : { username: identifier, password };

    const data = await authApi.login(payload);
    const accessToken = data?.accessToken;
    const userData = data?.user;

    if (!accessToken) {
      throw new Error('Access token was not returned by server.');
    }

    localStorage.setItem('token', accessToken);
    setToken(accessToken);

    if (userData && userData._id) {
      setUser(userData);
    } else {
      const profile = await authApi.getMe();
      setUser(profile);
    }
    return userData;
  };

  /**
   * Register a new user
   */
  const register = async ({ username, email, password }) => {
    const response = await authApi.register({ username, email, password });
    return response;
  };

  /**
   * Log out user
   */
  const logout = async () => {
    await authApi.logout();
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  /**
   * Refetch current user from backend
   */
  const refreshUser = async () => {
    try {
      const userData = await authApi.getMe();
      setUser(userData);
      return userData;
    } catch {
      return null;
    }
  };

  /**
   * Optimistically update user object in memory (e.g., watchlist toggle, bio edit)
   */
  const updateUserLocally = (updater) => {
    setUser((prev) => {
      if (!prev) return prev;
      if (typeof updater === 'function') {
        return updater(prev);
      }
      return { ...prev, ...updater };
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated: !!user && !!token,
        login,
        register,
        logout,
        refreshUser,
        updateUserLocally,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;