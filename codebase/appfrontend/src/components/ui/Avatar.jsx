import React, { useState } from 'react';

/**
 * Extracts 1-2 uppercase initials from a name or username.
 * e.g. "vraj" -> "VR", "vraj rupareliya" -> "VR", "film_lover" -> "FL"
 */
export const getInitials = (name = '') => {
  if (!name) return 'U';
  const clean = name.trim();
  const parts = clean.split(/[\s._-]+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  if (clean.length >= 2) {
    return clean.slice(0, 2).toUpperCase();
  }
  return clean.charAt(0).toUpperCase();
};

const Avatar = ({
  src,
  name = '',
  size = 40,
  fontSize,
  borderRadius = '50%',
  style = {},
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);
  const initials = getInitials(name);

  // Treat missing or generic placehold.co images as placeholder
  const isPlaceholder = !src || src.includes('placehold.co');
  const showImage = Boolean(src && !isPlaceholder && !imgError);

  const calculatedFontSize = fontSize || `${Math.max(11, Math.round(size * 0.36))}px`;

  return (
    <div
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
        borderRadius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(145deg, #222222 0%, #161616 100%)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: calculatedFontSize,
        letterSpacing: '-0.02em',
        userSelect: 'none',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
        flexShrink: 0,
        ...style,
      }}
      aria-label={name}
    >
      {showImage ? (
        <img
          src={src}
          alt={name}
          onError={() => setImgError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      ) : (
        <span style={{ lineHeight: 1 }}>{initials}</span>
      )}
    </div>
  );
};

export default Avatar;
