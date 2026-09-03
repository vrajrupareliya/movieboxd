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
    sm: 14,
    md: 18,
    lg: 24,
    xl: 32,
  };
  const pixelSize = starSizes[size] || 18;

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
        gap: '0.2rem',
        userSelect: 'none',
        ...style,
      }}
      role={readOnly ? 'img' : 'radiogroup'}
      aria-label={`Rating: ${rating} out of ${maxStars} stars`}
    >
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
              color: isFilled || isHalf ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.18)',
              transition: 'transform 120ms var(--ease-out), color 120ms var(--ease-out)',
              transform: !readOnly && hoverRating === starValue ? 'scale(1.18)' : 'scale(1)',
            }}
          >
            <Star
              size={pixelSize}
              fill={isFilled ? 'var(--accent-gold)' : isHalf ? 'url(#half-gold)' : 'transparent'}
              strokeWidth={1.5}
            />
          </button>
        );
      })}

      {showScore && (
        <span
          style={{
            marginLeft: '0.4rem',
            fontSize: size === 'sm' ? '0.78rem' : '0.88rem',
            fontWeight: 600,
            color: rating > 0 ? 'var(--accent-gold)' : 'var(--text-muted)',
            fontFamily: 'var(--font-display)',
          }}
        >
          {rating > 0 ? Number(rating).toFixed(1) : 'No rating'}
        </span>
      )}
    </div>
  );
};

export default StarRating;
