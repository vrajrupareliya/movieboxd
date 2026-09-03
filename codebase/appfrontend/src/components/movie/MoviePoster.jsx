import React, { useState } from 'react';
import { Film } from 'lucide-react';

const MoviePoster = ({
  src,
  alt = 'Movie Poster',
  aspectRatio = '2 / 3',
  className = '',
  style = {},
  borderRadius = 'var(--radius-sm)',
  fallbackTitle = '',
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const fallbackUrl = `https://placehold.co/300x450/141a24/00e054?text=${encodeURIComponent(fallbackTitle || alt)}`;

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio,
        borderRadius,
        overflow: 'hidden',
        background: 'var(--bg-surface)',
        boxShadow: 'var(--shadow-poster)',
        ...style,
      }}
    >
      {/* Skeleton Shimmer while loading */}
      {!loaded && !error && (
        <div
          className="skeleton-shimmer"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
          }}
        />
      )}

      {/* Actual Poster Image */}
      {!error && (
        <img
          src={src || fallbackUrl}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
          onLoad={() => setLoaded(true)}
          onError={() => {
            setError(true);
            setLoaded(true);
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 250ms var(--ease-out), transform 300ms var(--ease-out)',
          }}
        />
      )}

      {/* Fallback Graphic when image fails */}
      {error && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            textAlign: 'center',
            background: 'var(--bg-surface)',
            color: 'var(--text-muted)',
            gap: '0.5rem',
          }}
        >
          <Film size={28} color="var(--accent-green)" />
          <span
            style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {alt}
          </span>
        </div>
      )}
    </div>
  );
};

export default MoviePoster;
