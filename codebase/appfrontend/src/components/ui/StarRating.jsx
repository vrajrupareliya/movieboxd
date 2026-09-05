import React, { useState } from 'react';
import { Star } from 'lucide-react';

const StarRating = ({
  rating = 0,
  onChange,
  readOnly = true,
  maxStars = 5,
  size = 'md',
  showScore = false,
  className = '',
  style = {},
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  const starSizes = {
    sm: 13,
    md: 16,
    lg: 22,
    xl: 28,
  };
  const pixelSize = starSizes[size] || 16;

  const activeScore = hoverRating > 0 ? hoverRating : rating;

  const handleClick = (value) => {
    if (!readOnly && onChange) {
      onChange(value);
    }
  };

  const handleKeyDown = (e, value) => {
    if (readOnly || !onChange) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onChange(value);
    } else if (e.key === 'ArrowRight' && value < maxStars) {
      e.preventDefault();
      onChange(Math.min(maxStars, value + 1));
    } else if (e.key === 'ArrowLeft' && value > 1) {
      e.preventDefault();
      onChange(Math.max(1, value - 1));
    }
  };

  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.15rem',
        userSelect: 'none',
        ...style,
      }}
      role={readOnly ? 'img' : 'radiogroup'}
      aria-label={`Rating: ${rating} out of ${maxStars} stars`}
    >
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <linearGradient id="half-amber" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" stopColor="var(--accent-primary)" />
            <stop offset="50%" stopColor="transparent" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="half-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" stopColor="var(--accent-primary)" />
            <stop offset="50%" stopColor="transparent" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>

      {[...Array(maxStars)].map((_, i) => {
        const starValue = i + 1;
        const isFilled = activeScore >= starValue;
        const isHalf = !isFilled && activeScore >= starValue - 0.5;

        return (
          <button
            type="button"
            key={starValue}
            disabled={readOnly}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => !readOnly && setHoverRating(starValue)}
            onMouseLeave={() => !readOnly && setHoverRating(0)}
            onKeyDown={(e) => handleKeyDown(e, starValue)}
            tabIndex={readOnly ? -1 : 0}
            aria-label={`${starValue} Star${starValue > 1 ? 's' : ''}`}
            aria-checked={rating === starValue}
            role={readOnly ? undefined : 'radio'}
            style={{
              background: 'transparent',
              border: 'none',
              padding: readOnly ? '1px' : '2px',
              cursor: readOnly ? 'default' : 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: isFilled || isHalf ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.18)',
              transition: 'transform 100ms var(--ease-out), color 100ms var(--ease-out)',
              transform: !readOnly && hoverRating === starValue ? 'scale(1.15)' : 'scale(1)',
            }}
          >
            <Star
              size={pixelSize}
              fill={isFilled ? 'var(--accent-primary)' : isHalf ? 'url(#half-amber)' : 'transparent'}
              strokeWidth={1.5}
            />
          </button>
        );
      })}

      {showScore && (
        <span
          style={{
            marginLeft: '0.4rem',
            fontSize: size === 'sm' ? '0.78rem' : '0.86rem',
            fontWeight: 600,
            color: rating > 0 ? 'var(--accent-primary)' : 'var(--text-muted)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {rating > 0 ? Number(rating).toFixed(1) : 'No rating'}
        </span>
      )}
    </div>
  );
};

export default StarRating;
