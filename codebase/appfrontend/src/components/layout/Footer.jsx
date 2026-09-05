import React from 'react';
import { Film, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: 'auto',
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-app)',
        padding: '3rem 0 2.5rem 0',
        color: 'var(--text-muted)',
        fontSize: '0.88rem',
      }}
    >
      <div
        className="app-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
          }}
        >
          {/* Logo & Tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '1.25rem',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              <Film size={17} color="var(--accent-primary)" />
              <span>
                Movie<span style={{ color: 'var(--accent-primary)' }}>boxd</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              The archival catalogue for film lovers. Track, rate, and critique films.
            </p>
          </div>

          {/* Links */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              fontSize: '0.85rem',
              fontWeight: 500,
            }}
          >
            <Link to="/" style={{ color: 'var(--text-secondary)' }}>Films</Link>
            <Link to="/search" style={{ color: 'var(--text-secondary)' }}>Search</Link>
            <Link to="/feed" style={{ color: 'var(--text-secondary)' }}>Feed</Link>
            <Link to="/diary" style={{ color: 'var(--text-secondary)' }}>Diary</Link>
            <Link to="/watchlist" style={{ color: 'var(--text-secondary)' }}>Watchlist</Link>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '1.5rem',
            fontSize: '0.78rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ textAlign: 'center', width: '100%', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Movieboxd. Crafted for cinephiles.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
