import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Film, Sparkles, TrendingUp, Bookmark, Star, ArrowRight } from 'lucide-react';
import { moviesApi, socialApi } from '../api';
import { useAuth } from '../context/AuthContext';
import MovieRow from '../components/movie/MovieRow';
import MovieCard from '../components/movie/MovieCard';
import FeedItem from '../components/social/FeedItem';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { Skeleton } from '../components/ui/Skeleton';

const HomePage = () => {
  const { user, isAuthenticated } = useAuth();

  const [popularMovies, setPopularMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [feedItems, setFeedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feedLoading, setFeedLoading] = useState(false);

  useEffect(() => {
    const loadHomeData = async () => {
      setLoading(true);
      try {
        const movies = await moviesApi.getPopular();
        setPopularMovies(movies);
        if (movies.length > 0) {
          // Pick the first as spotlight or highest rated
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
        setFeedLoading(true);
        try {
          const res = await socialApi.getFeed(1, 4);
          setFeedItems(res.items || []);
        } catch {
          // Feed might be empty if user doesn't follow anyone yet
        } finally {
          setFeedLoading(false);
        }
      };
      loadFeed();
    }
  }, [isAuthenticated]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* Featured Hero Banner */}
      {loading ? (
        <div
          style={{
            height: '420px',
            borderRadius: 'var(--radius-lg)',
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
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            minHeight: '420px',
            display: 'flex',
            alignItems: 'flex-end',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            background: `linear-gradient(to top, rgba(11, 14, 20, 0.98) 0%, rgba(11, 14, 20, 0.7) 50%, rgba(11, 14, 20, 0.4) 100%), url(${featuredMovie.posterUrl}) center/cover no-repeat`,
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {/* Subtle Ambient Backing Glow */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              zIndex: 1,
            }}
          />

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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <Badge variant="green" size="md">
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
                lineHeight: 1.05,
                fontWeight: 800,
                color: 'var(--text-primary)',
              }}
            >
              {featuredMovie.title}
            </h1>

            {featuredMovie.synopsis && (
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {featuredMovie.synopsis}
              </p>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <Link to={`/movies/${featuredMovie._id}`}>
                <Button variant="primary" size="lg" rightIcon={<ArrowRight size={18} />}>
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
        subtitle="Trending Films"
        movies={popularMovies}
        isLoading={loading}
        viewAllLink="/search"
      />

      {/* Social Activity Feed Preview (if logged in) */}
      {isAuthenticated && feedItems.length > 0 && (
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
                Community
              </span>
              <h2 style={{ fontSize: '1.4rem' }}>Friend Activity</h2>
            </div>
            <Link to="/feed" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              View full feed →
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
              Browse Catalog
            </span>
            <h2 style={{ fontSize: '1.4rem' }}>Discover All Films</h2>
          </div>
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