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
    md: { padding: '0.2rem 0.6rem', fontSize: '0.78rem' },
  }[size] || sizeStyles.md;

  const variantStyles = {
    default: {
      background: 'rgba(255, 255, 255, 0.05)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-subtle)',
    },
    accent: {
      background: 'var(--accent-primary-subtle)',
      color: 'var(--accent-primary)',
      border: '1px solid rgba(232, 163, 61, 0.25)',
    },
    // Compatibility aliases collapsing to monochrome system
    green: {
      background: 'var(--accent-primary-subtle)',
      color: 'var(--accent-primary)',
      border: '1px solid rgba(232, 163, 61, 0.25)',
    },
    gold: {
      background: 'var(--accent-primary-subtle)',
      color: 'var(--accent-primary)',
      border: '1px solid rgba(232, 163, 61, 0.25)',
    },
    cyan: {
      background: 'rgba(255, 255, 255, 0.05)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-subtle)',
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
        borderRadius: '3px',
        lineHeight: 1.2,
        userSelect: 'none',
        letterSpacing: '0.01em',
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
