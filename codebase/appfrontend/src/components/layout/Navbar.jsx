import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Film, Search, Bookmark, BookOpen, Activity, User, Settings, LogOut, Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [searchQuery, setSearchQuery] = useState('');
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setUserMenuOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Click outside listener for dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const isCurrent = (path) => location.pathname === path;

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        height: 'var(--nav-height)',
        background: 'var(--bg-glass)',
        backdropFilter: 'var(--header-backdrop-blur)',
        WebkitBackdropFilter: 'var(--header-backdrop-blur)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="app-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.35rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: 'var(--radius-sm)',
              background: 'linear-gradient(135deg, #00e054, #00b040)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#07160d',
              boxShadow: '0 2px 8px var(--accent-green-glow)',
            }}
          >
            <Film size={18} strokeWidth={2.5} />
          </div>
          <span>
            movie<span style={{ color: 'var(--accent-green)' }}>boxd</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.25rem',
            fontSize: '0.9rem',
            fontWeight: 500,
          }}
          className="desktop-nav"
        >
          <Link
            to="/"
            style={{
              color: isCurrent('/') ? 'var(--accent-green)' : 'var(--text-secondary)',
              transition: 'color var(--duration-fast)',
            }}
          >
            Films
          </Link>
          {isAuthenticated && (
            <>
              <Link
                to="/feed"
                style={{
                  color: isCurrent('/feed') ? 'var(--accent-green)' : 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <Activity size={15} /> Feed
              </Link>
              <Link
                to="/diary"
                style={{
                  color: isCurrent('/diary') ? 'var(--accent-green)' : 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <BookOpen size={15} /> Diary
              </Link>
              <Link
                to="/watchlist"
                style={{
                  color: isCurrent('/watchlist') ? 'var(--accent-green)' : 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <Bookmark size={15} /> Watchlist
              </Link>
            </>
          )}
        </nav>

        {/* Quick Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          style={{
            flex: '1',
            maxWidth: '300px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Search
            size={16}
            style={{
              position: 'absolute',
              left: '0.75rem',
              color: 'var(--text-muted)',
              pointerEvents: 'none',
            }}
          />
          <input
            type="text"
            placeholder="Search films..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.45rem 0.85rem 0.45rem 2.25rem',
              fontSize: '0.86rem',
              color: 'var(--text-primary)',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-full)',
              outline: 'none',
              transition: 'border-color 150ms var(--ease-out), background 150ms var(--ease-out)',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--accent-green)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
          />
        </form>

        {/* Auth / Profile Area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {isAuthenticated ? (
            <div ref={userMenuRef} style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="pressable"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '4px 8px',
                  borderRadius: 'var(--radius-full)',
                  background: userMenuOpen ? 'var(--bg-surface-hover)' : 'transparent',
                  cursor: 'pointer',
                  border: '1px solid var(--border-subtle)',
                }}
                aria-expanded={userMenuOpen}
                aria-haspopup="true"
              >
                <img
                  src={user?.profilePictureUrl || `https://placehold.co/100x100/171d27/00e054?text=${user?.username?.charAt(0).toUpperCase() || 'U'}`}
                  alt={user?.username}
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/100x100/171d27/00e054?text=${user?.username?.charAt(0).toUpperCase() || 'U'}`;
                  }}
                />
                <span
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    maxWidth: '110px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {user?.username}
                </span>
              </button>

              {/* Dropdown Menu */}
              {userMenuOpen && (
                <div
                  className="animate-modal-in origin-top-right"
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    right: 0,
                    width: '210px',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '6px',
                    zIndex: 2000,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                  }}
                >
                  <Link
                    to="/profile/me"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '8px 12px',
                      fontSize: '0.88rem',
                      color: 'var(--text-primary)',
                      borderRadius: 'var(--radius-xs)',
                      transition: 'background 120ms',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-surface-hover)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <User size={16} /> Profile
                  </Link>

                  <Link
                    to="/settings"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '8px 12px',
                      fontSize: '0.88rem',
                      color: 'var(--text-primary)',
                      borderRadius: 'var(--radius-xs)',
                      transition: 'background 120ms',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-surface-hover)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <Settings size={16} /> Edit Profile
                  </Link>

                  <div style={{ height: '1px', background: 'var(--border-subtle)', margin: '4px 0' }} />

                  <button
                    type="button"
                    onClick={handleLogout}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '8px 12px',
                      fontSize: '0.88rem',
                      color: 'var(--accent-danger)',
                      borderRadius: 'var(--radius-xs)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'background 120ms',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-danger-subtle)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <LogOut size={16} /> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="primary" size="sm">
                  Join
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile Drawer Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              color: 'var(--text-primary)',
              padding: '6px',
              cursor: 'pointer',
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div
          className="animate-fade-in"
          style={{
            position: 'absolute',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            background: 'var(--bg-elevated)',
            borderBottom: '1px solid var(--border-medium)',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <Link to="/" style={{ color: 'var(--text-primary)', fontWeight: 500, padding: '0.5rem 0' }}>
            Films
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/feed" style={{ color: 'var(--text-primary)', fontWeight: 500, padding: '0.5rem 0' }}>
                Feed
              </Link>
              <Link to="/diary" style={{ color: 'var(--text-primary)', fontWeight: 500, padding: '0.5rem 0' }}>
                Diary
              </Link>
              <Link to="/watchlist" style={{ color: 'var(--text-primary)', fontWeight: 500, padding: '0.5rem 0' }}>
                Watchlist
              </Link>
              <Link to="/profile/me" style={{ color: 'var(--text-primary)', fontWeight: 500, padding: '0.5rem 0' }}>
                My Profile
              </Link>
              <Link to="/settings" style={{ color: 'var(--text-primary)', fontWeight: 500, padding: '0.5rem 0' }}>
                Settings
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                style={{
                  color: 'var(--accent-danger)',
                  fontWeight: 600,
                  textAlign: 'left',
                  padding: '0.5rem 0',
                  cursor: 'pointer',
                }}
              >
                Sign Out
              </button>
            </>
          ) : (
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <Link to="/login" style={{ flex: 1 }}>
                <Button variant="secondary" size="md" style={{ width: '100%' }}>
                  Sign In
                </Button>
              </Link>
              <Link to="/register" style={{ flex: 1 }}>
                <Button variant="primary" size="md" style={{ width: '100%' }}>
                  Join Movieboxd
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
