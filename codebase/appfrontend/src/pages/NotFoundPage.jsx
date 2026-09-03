import React from 'react';
import { Link } from 'react-router-dom';
import { Film } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        gap: '1.25rem',
        padding: '2rem',
      }}
    >
      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent-green)',
        }}
      >
        <Film size={36} />
      </div>

      <h1 style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>404</h1>
      <h2 style={{ fontSize: '1.4rem' }}>Film or Page Not Found</h2>
      <p style={{ maxWidth: '440px', color: 'var(--text-secondary)' }}>
        The reel seems to have run out. The page you are looking for might have been moved, renamed, or doesn't exist.
      </p>

      <Link to="/" style={{ marginTop: '0.5rem' }}>
        <Button variant="primary" size="md">
          Return to Cinema Catalog
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
