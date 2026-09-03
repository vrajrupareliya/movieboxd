import React, { useState, useEffect, useCallback } from 'react';
import { Bookmark, ArrowUpDown } from 'lucide-react';
import { watchlistApi } from '../api';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import MovieGrid from '../components/movie/MovieGrid';

const WatchlistPage = () => {
  const { user, updateUserLocally } = useAuth();
  const toast = useToast();

  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('recent');

  const fetchWatchlist = useCallback(async () => {
    setLoading(true);
    try {
      const data = await watchlistApi.getWatchlist();
      setWatchlist(data || []);
    } catch (err) {
      toast.error(err.message || 'Failed to load watchlist.');
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchWatchlist();
  }, [fetchWatchlist]);

  const handleRemove = async (movieId) => {
    // Optimistic remove
    setWatchlist((prev) => prev.filter((m) => m._id !== movieId));
    updateUserLocally((prev) => ({
      ...prev,
      watchlist: (prev.watchlist || []).filter((item) =>
        typeof item === 'string' ? item !== movieId : item?._id !== movieId
      ),
    }));

    try {
      await watchlistApi.remove(movieId);
    } catch (err) {
      toast.error(err.message || 'Failed to remove from watchlist.');
      fetchWatchlist(); // rollback
    }
  };

  const sortedWatchlist = [...watchlist].sort((a, b) => {
    if (sortBy === 'rating') return (b.averageRating || 0) - (a.averageRating || 0);
    if (sortBy === 'year') return (b.releaseYear || 0) - (a.releaseYear || 0);
    if (sortBy === 'title') return (a.title || '').localeCompare(b.title || '');
    return 0; // Default order
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header and Controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '1rem',
        }}
      >
        <div>
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 600,
              color: 'var(--accent-green)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              display: 'block',
              marginBottom: '0.2rem',
            }}
          >
            My Library
          </span>
          <h1 style={{ fontSize: '2rem' }}>Watchlist</h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            {watchlist.length} {watchlist.length === 1 ? 'film you want to see' : 'films you want to see'}
          </p>
        </div>

        {/* Sort Controls */}
        {watchlist.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ArrowUpDown size={15} color="var(--text-muted)" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                background: 'var(--bg-elevated)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.45rem 0.75rem',
                fontSize: '0.85rem',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="recent">Recently Added</option>
              <option value="rating">Highest Rated</option>
              <option value="year">Release Year</option>
              <option value="title">Film Title (A-Z)</option>
            </select>
          </div>
        )}
      </div>

      {/* Watchlist Movie Grid */}
      <MovieGrid
        movies={sortedWatchlist}
        isLoading={loading}
        showRemoveButton={true}
        onRemoveFromWatchlist={handleRemove}
        emptyTitle="Your watchlist is empty"
        emptyDescription="Explore our catalog of films and click the bookmark icon to start curating your watchlist."
      />
    </div>
  );
};

export default WatchlistPage;