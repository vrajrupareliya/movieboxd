import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { moviesApi, socialApi } from '../api';
import { useAuth } from '../context/AuthContext';
import MovieRow from '../components/movie/MovieRow';
import MovieCard from '../components/movie/MovieCard';
import FeedItem from '../components/social/FeedItem';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { Skeleton } from '../components/ui/Skeleton';

const HomePage = () => {
  const { isAuthenticated } = useAuth();

  const [popularMovies, setPopularMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [feedItems, setFeedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHomeData = async () => {
      setLoading(true);
      try {
        const movies = await moviesApi.getPopular();
        setPopularMovies(movies);
        if (movies.length > 0) {
          setFeaturedMovie(movies[0]);
        }
      } catch {
        // Handled silently
      } finally {
        setLoading(false);
      }
    };

    loadHomeData();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const loadFeed = async () => {
        try {
          const res = await socialApi.getFeed(1, 4);
          setFeedItems(res.items || []);
        } catch {
          // Feed might be empty if user doesn't follow anyone yet
        }
      };
      loadFeed();
    }
  }, [isAuthenticated]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
      {/* Featured Hero Banner - Crisp Archival Monograph Presentation */}
      {loading ? (
        <div
          style={{
            height: '420px',
            borderRadius: 'var(--radius-card)',
            overflow: 'hidden',
          }}
        >
          <Skeleton height="100%" width="100%" />
        </div>
      ) : featuredMovie ? (
        <section
          className="hero-spotlight animate-fade-in"
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-card)',
            overflow: 'hidden',
            minHeight: '420px',
            display: 'flex',
            alignItems: 'flex-end',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            background: `linear-gradient(to top, rgba(10, 10, 10, 0.98) 0%, rgba(10, 10, 10, 0.75) 45%, rgba(10, 10, 10, 0.3) 100%), url(${featuredMovie.posterUrl}) center/cover no-repeat`,
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              maxWidth: '720px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Badge variant="accent" size="md">
                Featured Film
              </Badge>
              {featuredMovie.releaseYear && (
                <Badge variant="default" size="md">
                  {featuredMovie.releaseYear}
                </Badge>
              )}
              {featuredMovie.genres?.map((g) => (
                <Badge key={g} variant="default" size="md">
                  {g}
                </Badge>
              ))}
            </div>

            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                lineHeight: 1.06,
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.025em',
              }}
            >
              {featuredMovie.title}
            </h1>

            {featuredMovie.synopsis && (
              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  maxWidth: '65ch',
                }}
              >
                {featuredMovie.synopsis}
              </p>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <Link to={`/movies/${featuredMovie._id}`}>
                <Button variant="primary" size="lg">
                  View Film Details
                </Button>
              </Link>
              {!isAuthenticated && (
                <Link to="/register">
                  <Button variant="secondary" size="lg">
                    Join to Track Films
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </section>
      ) : null}

      {/* Popular Films Carousel Rail */}
      <MovieRow
        title="Popular on Movieboxd"
        subtitle="Recent films receiving wide appreciation"
        movies={popularMovies}
        isLoading={loading}
        viewAllLink="/search"
      />

      {/* Social Activity Feed Preview (if logged in) */}
      {isAuthenticated && feedItems.length > 0 && (
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '0.65rem',
            }}
          >
            <div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 600 }}>Friend Activity</h2>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Recent reviews and ratings from members you follow
              </span>
            </div>
            <Link
              to="/feed"
              style={{
                fontSize: '0.82rem',
                fontWeight: 500,
                color: 'var(--text-muted)',
                transition: 'color var(--duration-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              View full feed
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {feedItems.map((item) => (
              <FeedItem key={item._id} item={item} />
            ))}
          </div>
        </section>
      )}

      {/* All Available Movies Grid Section */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div
          style={{
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '0.65rem',
          }}
        >
          <h2 style={{ fontSize: '1.35rem', fontWeight: 600 }}>Discover All Films</h2>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
            Explore the complete archive of catalogued cinema
          </span>
        </div>

        <div className="movie-grid">
          {popularMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;