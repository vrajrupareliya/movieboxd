import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className = '',
  style = {},
  onClick,
  ...props
}) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontWeight: 600,
    fontFamily: 'var(--font-sans)',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'background 150ms var(--ease-out), color 150ms var(--ease-out), border-color 150ms var(--ease-out), box-shadow 150ms var(--ease-out)',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    ...style,
  };

  const sizeStyles = {
    sm: { padding: '0.4rem 0.75rem', fontSize: '0.82rem', height: '32px' },
    md: { padding: '0.55rem 1.1rem', fontSize: '0.92rem', height: '40px' },
    lg: { padding: '0.75rem 1.6rem', fontSize: '1.02rem', height: '48px' },
  }[size] || sizeStyles.md;

  const variantStyles = {
    primary: {
      background: 'var(--accent-green)',
      color: '#07160d',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)',
    },
    secondary: {
      background: 'var(--bg-elevated)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-medium)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-medium)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent',
    },
    danger: {
      background: 'var(--accent-danger)',
      color: '#ffffff',
      border: '1px solid transparent',
    },
  }[variant] || variantStyles.primary;

  const combinedStyles = {
    ...baseStyles,
    ...sizeStyles,
    ...variantStyles,
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`pressable ${className}`}
      style={combinedStyles}
      {...props}
    >
      {isLoading && <Loader2 size={16} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />}
      {!isLoading && leftIcon}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </button>
  );
};

export default Button;
