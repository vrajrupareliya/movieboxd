import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';
import { SkeletonMovieCard } from '../ui/Skeleton';
import { Link } from 'react-router-dom';

const MovieRow = ({
  title,
  subtitle,
  movies = [],
  isLoading = false,
  viewAllLink,
  className = '',
  style = {},
}) => {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className={`movie-row-section ${className}`} style={{ margin: '2.5rem 0', ...style }}>
      {/* Row Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '1rem',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '0.65rem',
        }}
      >
        <div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 600 }}>{title}</h2>
          {subtitle && (
            <span
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                display: 'block',
                marginTop: '0.15rem',
              }}
            >
              {subtitle}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {viewAllLink && (
            <Link
              to={viewAllLink}
              style={{
                fontSize: '0.82rem',
                fontWeight: 500,
                color: 'var(--text-muted)',
                marginRight: '0.5rem',
                transition: 'color var(--duration-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              View all
            </Link>
          )}

          {/* Navigation Controls */}
          <button
            type="button"
            onClick={() => scroll('left')}
            className="pressable"
            aria-label="Scroll left"
            style={{
              width: '28px',
              height: '28px',
              borderRadius: 'var(--radius-control)',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="pressable"
            aria-label="Scroll right"
            style={{
              width: '28px',
              height: '28px',
              borderRadius: 'var(--radius-control)',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Rail Container */}
      <div
        ref={rowRef}
        className="horizontal-rail"
        style={{
          display: 'flex',
          gap: '1.25rem',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          paddingBottom: '0.5rem',
        }}
      >
        {isLoading
          ? [...Array(6)].map((_, i) => (
              <div key={i} style={{ width: '165px', flexShrink: 0 }}>
                <SkeletonMovieCard />
              </div>
            ))
          : movies.map((movie) => (
              <div key={movie._id} style={{ width: '165px', flexShrink: 0 }}>
                <MovieCard movie={movie} />
              </div>
            ))}
      </div>
    </section>
  );
};

export default MovieRow;
