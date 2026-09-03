import React from 'react';

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  style = {},
}) => {
  const sizeStyles = {
    sm: { padding: '0.15rem 0.45rem', fontSize: '0.72rem' },
    md: { padding: '0.25rem 0.65rem', fontSize: '0.8rem' },
  }[size] || sizeStyles.md;

  const variantStyles = {
    default: {
      background: 'rgba(255, 255, 255, 0.06)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-subtle)',
    },
    green: {
      background: 'var(--accent-green-subtle)',
      color: 'var(--accent-green)',
      border: '1px solid rgba(0, 224, 84, 0.25)',
    },
    gold: {
      background: 'rgba(255, 183, 3, 0.12)',
      color: 'var(--accent-gold)',
      border: '1px solid rgba(255, 183, 3, 0.25)',
    },
    cyan: {
      background: 'rgba(64, 188, 244, 0.12)',
      color: 'var(--accent-cyan)',
      border: '1px solid rgba(64, 188, 244, 0.25)',
    },
  }[variant] || variantStyles.default;

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.3rem',
        fontWeight: 500,
        borderRadius: 'var(--radius-full)',
        lineHeight: 1.2,
        userSelect: 'none',
        ...sizeStyles,
        ...variantStyles,
        ...style,
      }}
    >
      {children}
    </span>
  );
};

export default Badge;
