import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bookmark, Star, Trash2 } from 'lucide-react';
import MoviePoster from './MoviePoster';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { watchlistApi } from '../../api';

const MovieCard = ({
  movie,
  showRemoveButton = false,
  onRemoveFromWatchlist,
  className = '',
  style = {},
}) => {
  const { user, isAuthenticated, updateUserLocally } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const [isUpdatingWatchlist, setIsUpdatingWatchlist] = useState(false);

  if (!movie) return null;

  const movieId = movie._id;
  const isInWatchlist =
    user?.watchlist?.some((item) => (typeof item === 'string' ? item === movieId : item?._id === movieId)) || false;

  const handleWatchlistToggle = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      toast.info('Please sign in to add to your watchlist.');
      navigate('/login');
      return;
    }

    if (isUpdatingWatchlist) return;
    setIsUpdatingWatchlist(true);

    const previousWatchlist = user?.watchlist || [];
    // Optimistic Update
    if (isInWatchlist) {
      updateUserLocally((prev) => ({
        ...prev,
        watchlist: prev.watchlist.filter((item) =>
          typeof item === 'string' ? item !== movieId : item?._id !== movieId
        ),
      }));
    } else {
      updateUserLocally((prev) => ({
        ...prev,
        watchlist: [...(prev.watchlist || []), movieId],
      }));
    }

    try {
      if (isInWatchlist) {
        await watchlistApi.remove(movieId);
        if (onRemoveFromWatchlist) onRemoveFromWatchlist(movieId);
      } else {
        await watchlistApi.add(movieId);
      }
    } catch (err) {
      // Revert optimistic update on failure
      updateUserLocally((prev) => ({
        ...prev,
        watchlist: previousWatchlist,
      }));
      toast.error(err.message || 'Failed to update watchlist.');
    } finally {
      setIsUpdatingWatchlist(false);
    }
  };

  const handleRemoveClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onRemoveFromWatchlist) {
      onRemoveFromWatchlist(movieId);
    }
  };

  return (
    <div
      className={`movie-card-item pressable ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.45rem',
        textDecoration: 'none',
        color: 'inherit',
        position: 'relative',
        width: '100%',
        cursor: 'pointer',
        ...style,
      }}
    >
      <Link
        to={`/movies/${movieId}`}
        style={{
          position: 'relative',
          display: 'block',
          width: '100%',
          borderRadius: 'var(--radius-sm)',
          overflow: 'hidden',
        }}
      >
        <div className="poster-container" style={{ position: 'relative' }}>
          <MoviePoster
            src={movie.posterUrl}
            alt={movie.title}
            fallbackTitle={movie.title}
          />

          {/* Hover Overlay with Action Buttons */}
          <div
            className="poster-overlay"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(11, 14, 20, 0.95) 0%, rgba(11, 14, 20, 0.3) 50%, rgba(11, 14, 20, 0.6) 100%)',
              opacity: 0,
              transition: 'opacity 180ms var(--ease-out)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '0.6rem',
              zIndex: 2,
            }}
          >
            {/* Top Bar inside Overlay */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              {showRemoveButton ? (
                <button
                  type="button"
                  onClick={handleRemoveClick}
                  className="pressable"
                  title="Remove from Watchlist"
                  style={{
                    background: 'rgba(239, 68, 68, 0.85)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: 'var(--radius-full)',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <Trash2 size={15} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleWatchlistToggle}
                  className="pressable"
                  title={isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
                  style={{
                    background: isInWatchlist ? 'var(--accent-green)' : 'rgba(16, 20, 29, 0.85)',
                    color: isInWatchlist ? '#07160d' : '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: 'var(--radius-full)',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'background 150ms, color 150ms, transform 120ms',
                  }}
                >
                  <Bookmark
                    size={16}
                    fill={isInWatchlist ? 'currentColor' : 'none'}
                    strokeWidth={2}
                  />
                </button>
              )}
            </div>

            {/* Bottom rating score */}
            {movie.averageRating > 0 && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--accent-gold)',
                  fontFamily: 'var(--font-display)',
                }}
              >
                <Star size={14} fill="var(--accent-gold)" />
                <span>{Number(movie.averageRating).toFixed(1)}</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 400 }}>
                  ({movie.reviewCount || 0})
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>

      {/* Title & Metadata */}
      <Link to={`/movies/${movieId}`} style={{ textDecoration: 'none' }}>
        <h4
          style={{
            fontSize: '0.92rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            lineHeight: 1.25,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            transition: 'color var(--duration-fast)',
          }}
          title={movie.title}
        >
          {movie.title}
        </h4>
      </Link>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          lineHeight: 1,
        }}
      >
        <span>{movie.releaseYear || ''}</span>
        {movie.averageRating > 0 && (
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.2rem',
              color: 'var(--accent-gold)',
              fontWeight: 600,
            }}
          >
            <Star size={11} fill="var(--accent-gold)" />
            {Number(movie.averageRating).toFixed(1)}
          </span>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
