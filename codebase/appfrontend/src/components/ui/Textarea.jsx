import React, { forwardRef } from 'react';

const Textarea = forwardRef(
  (
    {
      label,
      id,
      name,
      rows = 4,
      placeholder,
      value,
      onChange,
      error,
      helperText,
      required = false,
      disabled = false,
      className = '',
      style = {},
      ...props
    },
    ref
  ) => {
    const textareaId = id || name || Math.random().toString(36).substring(2, 9);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', width: '100%', ...style }}>
        {label && (
          <label
            htmlFor={textareaId}
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

        <textarea
          ref={ref}
          id={textareaId}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={className}
          style={{
            width: '100%',
            padding: '0.75rem 0.85rem',
            color: 'var(--text-primary)',
            fontSize: '0.92rem',
            fontFamily: 'var(--font-sans)',
            background: 'var(--bg-surface)',
            border: `1px solid ${error ? 'var(--accent-danger)' : 'var(--border-subtle)'}`,
            borderRadius: 'var(--radius-sm)',
            outline: 'none',
            resize: 'vertical',
            lineHeight: 1.5,
            transition: 'border-color 180ms var(--ease-out)',
          }}
          {...props}
        />

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

Textarea.displayName = 'Textarea';
export default Textarea;
