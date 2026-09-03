import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Calendar, MessageSquare } from 'lucide-react';
import StarRating from '../ui/StarRating';

const FeedItem = ({ item }) => {
  if (!item) return null;

  const user = item.user || {};
  const movie = item.movie || {};
  const formattedDate = item.createdAt
    ? new Date(item.createdAt).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : '';

  return (
    <article
      className="card-surface animate-fade-in"
      style={{
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      {/* Activity Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link to={`/users/${user._id}`}>
            <img
              src={
                user.profilePictureUrl ||
                `https://placehold.co/100x100/171d27/00e054?text=${
                  user.username?.charAt(0).toUpperCase() || 'U'
                }`
              }
              alt={user.username}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '1px solid var(--border-medium)',
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/100x100/171d27/00e054?text=${
                  user.username?.charAt(0).toUpperCase() || 'U'
                }`;
              }}
            />
          </Link>
          <div>
            <div style={{ fontSize: '0.92rem' }}>
              <Link to={`/users/${user._id}`} style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                {user.username}
              </Link>{' '}
              <span style={{ color: 'var(--text-muted)' }}>reviewed</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
              }}
            >
              <Calendar size={12} />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>

        {item.rating > 0 && <StarRating rating={item.rating} readOnly size="sm" showScore />}
      </div>

      {/* Movie Content Spotlight */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          background: 'var(--bg-elevated)',
          padding: '1rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        {movie.posterUrl && (
          <Link to={`/movies/${movie._id}`} style={{ flexShrink: 0 }}>
            <img
              src={movie.posterUrl}
              alt={movie.title}
              style={{
                width: '64px',
                height: '96px',
                borderRadius: 'var(--radius-xs)',
                objectFit: 'cover',
                boxShadow: 'var(--shadow-sm)',
              }}
            />
          </Link>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
          <div>
            <Link
              to={`/movies/${movie._id}`}
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}
            >
              {movie.title}
            </Link>
            {movie.releaseYear && (
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginLeft: '0.4rem' }}>
                ({movie.releaseYear})
              </span>
            )}
          </div>

          {item.comment && (
            <p
              style={{
                fontSize: '0.9rem',
                lineHeight: 1.5,
                color: 'var(--text-secondary)',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              "{item.comment}"
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

export default FeedItem;
