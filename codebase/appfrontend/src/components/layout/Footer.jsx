import React from 'react';
import { Film, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: 'auto',
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-primary)',
        padding: '3rem 0 2rem 0',
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.2rem',
                color: 'var(--text-primary)',
              }}
            >
              <Film size={18} color="var(--accent-green)" />
              <span>
                movie<span style={{ color: 'var(--accent-green)' }}>boxd</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              The social network for film lovers. Track, rate, and discover films.
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
          <p>© {new Date().getFullYear()} Movieboxd. Crafted with care for cinephiles.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Made with</span>
            <Heart size={13} color="var(--accent-green)" fill="var(--accent-green)" />
            <span>for cinema</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
