import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Film, Search, Bookmark, BookOpen, User } from 'lucide-react';

const MobileNav = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const isCurrent = (path) => location.pathname === path;

  return (
    <nav
      className="mobile-bottom-nav"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 'var(--mobile-nav-height)',
        background: 'var(--bg-glass)',
        backdropFilter: 'var(--header-backdrop-blur)',
        WebkitBackdropFilter: 'var(--header-backdrop-blur)',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        zIndex: 1000,
        padding: '0 0.5rem',
      }}
      aria-label="Mobile Navigation"
    >
      <Link
        to="/"
        className="pressable"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: isCurrent('/') ? 'var(--accent-primary)' : 'var(--text-muted)',
          fontSize: '0.72rem',
          fontWeight: isCurrent('/') ? 600 : 500,
          padding: '4px',
        }}
      >
        <Film size={20} />
        <span>Films</span>
      </Link>

      <Link
        to="/search"
        className="pressable"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: isCurrent('/search') ? 'var(--accent-primary)' : 'var(--text-muted)',
          fontSize: '0.72rem',
          fontWeight: isCurrent('/search') ? 600 : 500,
          padding: '4px',
        }}
      >
        <Search size={20} />
        <span>Search</span>
      </Link>

      {isAuthenticated ? (
        <>
          <Link
            to="/watchlist"
            className="pressable"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
              color: isCurrent('/watchlist') ? 'var(--accent-primary)' : 'var(--text-muted)',
              fontSize: '0.72rem',
              fontWeight: isCurrent('/watchlist') ? 600 : 500,
              padding: '4px',
            }}
          >
            <Bookmark size={20} />
            <span>Watchlist</span>
          </Link>

          <Link
            to="/diary"
            className="pressable"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
              color: isCurrent('/diary') ? 'var(--accent-primary)' : 'var(--text-muted)',
              fontSize: '0.72rem',
              fontWeight: isCurrent('/diary') ? 600 : 500,
              padding: '4px',
            }}
          >
            <BookOpen size={20} />
            <span>Diary</span>
          </Link>

          <Link
            to="/profile/me"
            className="pressable"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
              color: isCurrent('/profile/me') ? 'var(--accent-primary)' : 'var(--text-muted)',
              fontSize: '0.72rem',
              fontWeight: isCurrent('/profile/me') ? 600 : 500,
              padding: '4px',
            }}
          >
            <User size={20} />
            <span>Profile</span>
          </Link>
        </>
      ) : (
        <Link
          to="/login"
          className="pressable"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            color: isCurrent('/login') ? 'var(--accent-primary)' : 'var(--text-muted)',
            fontSize: '0.72rem',
            fontWeight: 500,
            padding: '4px',
          }}
        >
          <User size={20} />
          <span>Sign In</span>
        </Link>
      )}
    </nav>
  );
};

export default MobileNav;
