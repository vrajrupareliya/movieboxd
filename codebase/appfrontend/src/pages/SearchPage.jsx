import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon, X, SlidersHorizontal } from 'lucide-react';
import { moviesApi } from '../api';
import MovieGrid from '../components/movie/MovieGrid';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('query') || '';

  const [query, setQuery] = useState(initialQuery);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Synchronize state when URL param changes
  useEffect(() => {
    const urlQuery = searchParams.get('query') || '';
    setQuery(urlQuery);
    if (urlQuery.trim()) {
      handleSearch(urlQuery.trim());
    } else {
      // If query is empty, show all/popular films
      loadDefaultMovies();
    }
  }, [searchParams]);

  const loadDefaultMovies = async () => {
    setLoading(true);
    try {
      const data = await moviesApi.getPopular();
      setMovies(data);
      setHasSearched(false);
    } catch {
      // Gracefully handle empty or failed search
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (searchTerm) => {
    if (!searchTerm.trim()) {
      loadDefaultMovies();
      return;
    }
    setLoading(true);
    setHasSearched(true);
    try {
      const results = await moviesApi.search(searchTerm.trim());
      setMovies(results);
    } catch {
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ query: query.trim() });
    } else {
      setSearchParams({});
    }
  };

  const handleClear = () => {
    setQuery('');
    setSearchParams({});
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header & Search Bar Input */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 600,
              color: 'var(--accent-green)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              display: 'block',
              marginBottom: '0.2rem',
            }}
          >
            Find Films
          </span>
          <h1 style={{ fontSize: '2rem' }}>Search Movieboxd</h1>
        </div>

        <form onSubmit={handleSubmit} style={{ position: 'relative', width: '100%', maxWidth: '640px' }}>
          <SearchIcon
            size={20}
            style={{
              position: 'absolute',
              left: '1.1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)',
              pointerEvents: 'none',
            }}
          />
          <input
            type="text"
            placeholder="Search by movie title..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.85rem 3rem 0.85rem 3rem',
              fontSize: '1rem',
              color: 'var(--text-primary)',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-full)',
              outline: 'none',
              transition: 'border-color 180ms var(--ease-out), box-shadow 180ms var(--ease-out)',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--accent-green)';
              e.target.style.boxShadow = '0 0 0 3px var(--accent-green-subtle)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border-medium)';
              e.target.style.boxShadow = 'none';
            }}
          />
          {query && (
            <button
              type="button"
              onClick={handleClear}
              style={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Clear search input"
            >
              <X size={18} />
            </button>
          )}
        </form>
      </div>

      {/* Results Title & Count */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
          {hasSearched ? `Results for "${searchParams.get('query')}"` : 'Browse Catalog'}
        </h3>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          {movies.length} {movies.length === 1 ? 'film' : 'films'}
        </span>
      </div>

      {/* Results Grid */}
      <MovieGrid
        movies={movies}
        isLoading={loading}
        emptyTitle={`No films found matching "${searchParams.get('query')}"`}
        emptyDescription="Check your spelling or try searching for another film title."
      />
    </div>
  );
};

export default SearchPage;
