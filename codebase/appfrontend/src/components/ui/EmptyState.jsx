import React from 'react';
import { Film } from 'lucide-react';
import Button from './Button';
import { Link } from 'react-router-dom';

const EmptyState = ({
  icon: Icon = Film,
  title = 'No items yet',
  description = 'Nothing has been logged or added here yet.',
  actionLabel,
  actionTo,
  onAction,
  style = {},
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '3rem 1.5rem',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        margin: '1.25rem 0',
        ...style,
      }}
    >
      <div
        style={{
          color: 'var(--text-muted)',
          marginBottom: '0.85rem',
          opacity: 0.8,
        }}
      >
        <Icon size={32} strokeWidth={1.5} />
      </div>

      <h3
        style={{
          fontSize: '1.15rem',
          fontWeight: 600,
          marginBottom: '0.35rem',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-display)',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          maxWidth: '420px',
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.5,
          marginBottom: actionLabel ? '1.25rem' : 0,
        }}
      >
        {description}
      </p>

      {actionLabel && actionTo && (
        <Link to={actionTo}>
          <Button variant="secondary" size="md">
            {actionLabel}
          </Button>
        </Link>
      )}

      {actionLabel && !actionTo && onAction && (
        <Button variant="secondary" size="md" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;

