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
    <section className={`movie-row-section ${className}`} style={{ margin: '2rem 0', ...style }}>
      {/* Row Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '1rem',
        }}
      >
        <div>
          {subtitle && (
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
              {subtitle}
            </span>
          )}
          <h2 style={{ fontSize: '1.4rem' }}>{title}</h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {viewAllLink && (
            <Link
              to={viewAllLink}
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                marginRight: '0.5rem',
              }}
            >
              See all
            </Link>
          )}

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={() => scroll('left')}
            className="pressable"
            aria-label="Scroll left"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="pressable"
            aria-label="Scroll right"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Rail Container */}
      <div
        ref={rowRef}
        className="horizontal-rail"
        style={{
          display: 'flex',
          gap: '1rem',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          paddingBottom: '0.5rem',
        }}
      >
        {isLoading
          ? [...Array(6)].map((_, i) => (
              <div key={i} style={{ width: '170px', flexShrink: 0 }}>
                <SkeletonMovieCard />
              </div>
            ))
          : movies.map((movie) => (
              <div key={movie._id} style={{ width: '170px', flexShrink: 0 }}>
                <MovieCard movie={movie} />
              </div>
            ))}
      </div>
    </section>
  );
};

export default MovieRow;
