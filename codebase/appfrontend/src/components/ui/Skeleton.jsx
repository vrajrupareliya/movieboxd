import React from 'react';

export const Skeleton = ({
  width = '100%',
  height = '20px',
  borderRadius = 'var(--radius-sm)',
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`skeleton-shimmer ${className}`}
      style={{
        width,
        height,
        borderRadius,
        ...style,
      }}
    />
  );
};

export const SkeletonPoster = ({ aspectRatio = '2 / 3', width = '100%', style = {} }) => {
  return (
    <div
      className="skeleton-shimmer"
      style={{
        width,
        aspectRatio,
        borderRadius: 'var(--radius-sm)',
        boxShadow: 'var(--shadow-poster)',
        ...style,
      }}
    />
  );
};

export const SkeletonMovieCard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', width: '100%' }}>
      <SkeletonPoster />
      <Skeleton height="16px" width="85%" />
      <Skeleton height="12px" width="50%" />
    </div>
  );
};

export const SkeletonReview = () => {
  return (
    <div
      style={{
        padding: '1.25rem',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Skeleton width="40px" height="40px" borderRadius="50%" />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <Skeleton width="120px" height="14px" />
          <Skeleton width="80px" height="10px" />
        </div>
        <Skeleton width="70px" height="16px" />
      </div>
      <Skeleton height="14px" width="100%" />
      <Skeleton height="14px" width="90%" />
      <Skeleton height="14px" width="60%" />
    </div>
  );
};

export default Skeleton;
