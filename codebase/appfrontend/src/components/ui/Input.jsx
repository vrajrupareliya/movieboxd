import React, { forwardRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Input = forwardRef(
  (
    {
      label,
      id,
      name,
      type = 'text',
      placeholder,
      value,
      onChange,
      error,
      helperText,
      leftIcon,
      rightIcon,
      required = false,
      disabled = false,
      className = '',
      style = {},
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputId = id || name || Math.random().toString(36).substring(2, 9);
    const isPassword = type === 'password';
    const actualType = isPassword ? (showPassword ? 'text' : 'password') : type;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', width: '100%', ...style }}>
        {label && (
          <label
            htmlFor={inputId}
            style={{
              fontSize: '0.85rem',
              fontWeight: 500,
              color: error ? 'var(--accent-danger)' : 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
            }}
          >
            {label}
            {required && <span style={{ color: 'var(--accent-danger)' }}>*</span>}
          </label>
        )}

        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            background: 'var(--bg-surface)',
            border: `1px solid ${error ? 'var(--accent-danger)' : 'var(--border-subtle)'}`,
            borderRadius: 'var(--radius-sm)',
            transition: 'border-color 180ms var(--ease-out), box-shadow 180ms var(--ease-out)',
          }}
        >
          {leftIcon && (
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '0.85rem',
                color: 'var(--text-muted)',
              }}
            >
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            name={name}
            type={actualType}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            className={className}
            style={{
              width: '100%',
              padding: leftIcon ? '0.65rem 0.85rem 0.65rem 0.5rem' : '0.65rem 0.85rem',
              paddingRight: isPassword || rightIcon ? '2.5rem' : '0.85rem',
              color: 'var(--text-primary)',
              fontSize: '0.92rem',
              background: 'transparent',
              outline: 'none',
              borderRadius: 'var(--radius-sm)',
            }}
            {...props}
          />

          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
              style={{
                position: 'absolute',
                right: '0.75rem',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '2px',
              }}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          )}

          {!isPassword && rightIcon && (
            <span
              style={{
                position: 'absolute',
                right: '0.75rem',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {rightIcon}
            </span>
          )}
        </div>

        {error && (
          <span style={{ fontSize: '0.78rem', color: 'var(--accent-danger)', marginTop: '0.1rem' }}>
            {error}
          </span>
        )}
        {!error && helperText && (
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
