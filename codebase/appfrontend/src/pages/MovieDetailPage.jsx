import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { Bookmark, Star, Calendar, User, Film, MessageSquarePlus, Share2 } from 'lucide-react';
import { moviesApi, reviewsApi, watchlistApi } from '../api';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import MoviePoster from '../components/movie/MoviePoster';
import ReviewList from '../components/review/ReviewList';
import ReviewComposerModal from '../components/review/ReviewComposerModal';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import StarRating from '../components/ui/StarRating';
import Pagination from '../components/ui/Pagination';
import { Skeleton } from '../components/ui/Skeleton';

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { user, isAuthenticated, updateUserLocally } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loadingMovie, setLoadingMovie] = useState(true);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalReviewsCount, setTotalReviewsCount] = useState(0);

  const [isComposerOpen, setIsComposerOpen] = useState(false);
  const [editingReview, setEditingReview] = useState(null);
  const [isUpdatingWatchlist, setIsUpdatingWatchlist] = useState(false);

  // Fetch Movie Data
  const fetchMovie = useCallback(async () => {
    setLoadingMovie(true);
    try {
      const data = await moviesApi.getById(movieId);
      setMovie(data);
    } catch (err) {
      toast.error(err.message || 'Failed to load movie details.');
    } finally {
      setLoadingMovie(false);
    }
  }, [movieId, toast]);

  // Fetch Reviews Data
  const fetchReviews = useCallback(
    async (page = 1) => {
      setLoadingReviews(true);
      try {
        const res = await reviewsApi.getForMovie(movieId, page, 8);
        setReviews(res.reviews || []);
        setTotalPages(res.totalPages || 1);
        setCurrentPage(res.currentPage || 1);
        setTotalReviewsCount(res.totalCount || 0);
      } catch {
        // Handled silently; reviews remain empty or previous state
      } finally {
        setLoadingReviews(false);
      }
    },
    [movieId]
  );

  useEffect(() => {
    fetchMovie();
    fetchReviews(1);
  }, [fetchMovie, fetchReviews]);

  // Watchlist status
  const isInWatchlist =
    user?.watchlist?.some((item) => (typeof item === 'string' ? item === movieId : item?._id === movieId)) || false;

  // Check if current user already reviewed this movie
  const userExistingReview = reviews.find(
    (r) => r.user?._id === user?._id || r.user === user?._id
  );

  const handleWatchlistToggle = async () => {
    if (!isAuthenticated) {
      toast.info('Please sign in to add films to your watchlist.');
      navigate('/login', { state: { from: location } });
      return;
    }

    if (isUpdatingWatchlist) return;
    setIsUpdatingWatchlist(true);

    const previousWatchlist = user?.watchlist || [];
    if (isInWatchlist) {
      updateUserLocally((prev) => ({
        ...prev,
        watchlist: prev.watchlist.filter((item) =>
          typeof item === 'string' ? item !== movieId : item?._id !== movieId
        ),
      }));
    } else {
      updateUserLocally((prev) => ({
        ...prev,
        watchlist: [...(prev.watchlist || []), movieId],
      }));
    }

    try {
      if (isInWatchlist) {
        await watchlistApi.remove(movieId);
      } else {
        await watchlistApi.add(movieId);
      }
    } catch (err) {
      updateUserLocally((prev) => ({ ...prev, watchlist: previousWatchlist }));
      toast.error(err.message || 'Failed to update watchlist.');
    } finally {
      setIsUpdatingWatchlist(false);
    }
  };

  const handleOpenComposer = (reviewToEdit = null) => {
    if (!isAuthenticated) {
      toast.info('Please sign in to rate or review this film.');
      navigate('/login', { state: { from: location } });
      return;
    }
    setEditingReview(reviewToEdit);
    setIsComposerOpen(true);
  };

  const handleReviewSuccess = () => {
    fetchReviews(1);
    fetchMovie(); // Refresh average rating and reviewCount on movie document
  };

  const handleReviewDeleted = (deletedId) => {
    setReviews((prev) => prev.filter((r) => r._id !== deletedId));
    fetchMovie();
  };

  if (loadingMovie) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Skeleton height="320px" borderRadius="var(--radius-lg)" />
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Skeleton width="240px" height="360px" />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Skeleton height="36px" width="60%" />
            <Skeleton height="20px" width="40%" />
            <Skeleton height="100px" width="100%" />
          </div>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h2>Film Not Found</h2>
        <p style={{ margin: '1rem 0' }}>We couldn't find the requested film.</p>
        <Link to="/">
          <Button variant="primary">Return to Catalog</Button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      {/* Movie Hero Presentation Banner */}
      <section
        style={{
          position: 'relative',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          background: `linear-gradient(to top, rgba(11, 14, 20, 1) 0%, rgba(16, 20, 29, 0.8) 50%, rgba(16, 20, 29, 0.4) 100%), url(${movie.posterUrl}) center/cover no-repeat`,
          border: '1px solid var(--border-subtle)',
          padding: 'clamp(1.5rem, 4vw, 3rem)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {/* Main Flex layout: Poster + Film Information */}
          <div
            style={{
              display: 'flex',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            {/* Poster Card */}
            <div style={{ width: '220px', flexShrink: 0 }} className="poster-col">
              <MoviePoster
                src={movie.posterUrl}
                alt={movie.title}
                fallbackTitle={movie.title}
                borderRadius="var(--radius-md)"
                style={{ boxShadow: 'var(--shadow-poster)' }}
              />
            </div>

            {/* Info Column */}
            <div style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Genre Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {movie.genres?.map((genre) => (
                  <Badge key={genre} variant="default" size="md">
                    {genre}
                  </Badge>
                ))}
              </div>

              {/* Title & Release Year */}
              <div>
                <h1
                  style={{
                    fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
                    fontWeight: 800,
                    lineHeight: 1.1,
                  }}
                >
                  {movie.title}
                </h1>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginTop: '0.5rem',
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {movie.releaseYear && <span>{movie.releaseYear}</span>}
                  {movie.director && (
                    <span>
                      Directed by <strong style={{ color: 'var(--text-primary)' }}>{movie.director}</strong>
                    </span>
                  )}
                </div>
              </div>

              {/* Community Rating Bar */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.75rem 1rem',
                  background: 'rgba(255, 255, 255, 0.04)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  width: 'fit-content',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Star size={24} fill="var(--accent-gold)" color="var(--accent-gold)" />
                  <span style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                    {movie.averageRating > 0 ? Number(movie.averageRating).toFixed(1) : '-'}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>/ 5</span>
                </div>
                <div style={{ width: '1px', height: '24px', background: 'var(--border-subtle)' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <strong>{movie.reviewCount || 0}</strong> {movie.reviewCount === 1 ? 'review' : 'reviews'}
                </span>
              </div>

              {/* Synopsis */}
              {movie.synopsis && (
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem' }}>
                    Synopsis
                  </h4>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                    {movie.synopsis}
                  </p>
                </div>
              )}

              {/* Cast */}
              {movie.cast && movie.cast.length > 0 && (
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem' }}>
                    Starring
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {movie.cast.map((actor) => (
                      <Badge key={actor} variant="default" size="sm">
                        {actor}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons Toolbar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  flexWrap: 'wrap',
                  marginTop: '0.5rem',
                }}
              >
                <Button
                  variant={isInWatchlist ? 'primary' : 'secondary'}
                  size="md"
                  onClick={handleWatchlistToggle}
                  isLoading={isUpdatingWatchlist}
                  leftIcon={<Bookmark size={18} fill={isInWatchlist ? 'currentColor' : 'none'} />}
                >
                  {isInWatchlist ? 'In Watchlist' : 'Add to Watchlist'}
                </Button>

                {userExistingReview ? (
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => handleOpenComposer(userExistingReview)}
                    leftIcon={<Star size={18} fill="var(--accent-gold)" color="var(--accent-gold)" />}
                  >
                    Edit Your Review ({userExistingReview.rating}★)
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => handleOpenComposer()}
                    leftIcon={<MessageSquarePlus size={18} />}
                  >
                    Log / Review Film
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Reviews Section */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '0.85rem',
          }}
        >
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
              Member Opinions
            </span>
            <h2 style={{ fontSize: '1.4rem' }}>
              Reviews ({totalReviewsCount})
            </h2>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleOpenComposer()}
            leftIcon={<MessageSquarePlus size={16} />}
          >
            {userExistingReview ? 'Edit Review' : 'Add Review'}
          </Button>
        </div>

        {/* Reviews List */}
        <ReviewList
          reviews={reviews}
          isLoading={loadingReviews}
          onReviewDeleted={handleReviewDeleted}
          onEditClick={(r) => handleOpenComposer(r)}
          onWriteReviewClick={() => handleOpenComposer()}
        />

        {/* Reviews Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => fetchReviews(page)}
        />
      </section>

      {/* Review Composer Modal */}
      <ReviewComposerModal
        isOpen={isComposerOpen}
        onClose={() => setIsComposerOpen(false)}
        movie={movie}
        initialReview={editingReview}
        onSuccess={handleReviewSuccess}
      />
    </div>
  );
};

export default MovieDetailPage;