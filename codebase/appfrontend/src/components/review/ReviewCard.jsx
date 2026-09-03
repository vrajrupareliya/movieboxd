import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Edit3, Trash2, Calendar } from 'lucide-react';
import StarRating from '../ui/StarRating';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { reviewsApi } from '../../api';

const ReviewCard = ({
  review,
  showMovieInfo = false,
  onReviewUpdated,
  onReviewDeleted,
  onEditClick,
  className = '',
  style = {},
}) => {
  const { user, isAuthenticated } = useAuth();
  const toast = useToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const confirmTimeoutRef = React.useRef(null);

  React.useEffect(() => {
    return () => {
      if (confirmTimeoutRef.current) clearTimeout(confirmTimeoutRef.current);
    };
  }, []);

  if (!review) return null;

  const reviewUser = review.user || {};
  const reviewMovie = review.movie || {};
  const isAuthor =
    isAuthenticated &&
    user &&
    (reviewUser._id === user._id || reviewUser === user._id || review.user === user._id);

  const formattedDate = review.createdAt
    ? new Date(review.createdAt).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : '';

  const handleDelete = async () => {
    if (!isConfirmingDelete) {
      setIsConfirmingDelete(true);
      if (confirmTimeoutRef.current) clearTimeout(confirmTimeoutRef.current);
      confirmTimeoutRef.current = setTimeout(() => {
        setIsConfirmingDelete(false);
      }, 3500);
      return;
    }

    if (confirmTimeoutRef.current) clearTimeout(confirmTimeoutRef.current);
    setIsDeleting(true);
    try {
      await reviewsApi.delete(review._id);
      if (onReviewDeleted) onReviewDeleted(review._id);
    } catch (err) {
      toast.error(err.message || 'Failed to delete review.');
      setIsDeleting(false);
      setIsConfirmingDelete(false);
    }
  };

  return (
    <article
      className={`card-surface animate-fade-in ${className}`}
      style={{
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem',
        ...style,
      }}
    >
      {/* Header with User Info / Movie Info & Star Rating */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* User Avatar */}
          <Link to={`/users/${reviewUser._id || reviewUser}`}>
            <img
              src={
                reviewUser.profilePictureUrl ||
                `https://placehold.co/100x100/171d27/00e054?text=${
                  reviewUser.username?.charAt(0).toUpperCase() || 'U'
                }`
              }
              alt={reviewUser.username || 'Reviewer'}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '1px solid var(--border-medium)',
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/100x100/171d27/00e054?text=${
                  reviewUser.username?.charAt(0).toUpperCase() || 'U'
                }`;
              }}
            />
          </Link>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Link
                to={`/users/${reviewUser._id || reviewUser}`}
                style={{
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  color: 'var(--text-primary)',
                }}
              >
                {reviewUser.username || 'Anonymous Cinephile'}
              </Link>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
              }}
            >
              <Calendar size={12} />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>

        {/* Rating and Author Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <StarRating rating={review.rating} readOnly size="sm" showScore />

          {isAuthor && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              {onEditClick && (
                <button
                  type="button"
                  onClick={() => onEditClick(review)}
                  title="Edit Review"
                  className="pressable"
                  style={{
                    color: 'var(--text-muted)',
                    padding: '4px',
                    borderRadius: 'var(--radius-xs)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  <Edit3 size={15} />
                </button>
              )}

              {isConfirmingDelete ? (
                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="pressable"
                  style={{
                    color: 'var(--accent-danger)',
                    background: 'var(--accent-danger-subtle)',
                    border: '1px solid var(--accent-danger)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-xs)',
                    cursor: 'pointer',
                  }}
                >
                  {isDeleting ? 'Deleting...' : 'Confirm delete?'}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={isDeleting}
                  title="Delete Review"
                  className="pressable"
                  style={{
                    color: 'var(--text-muted)',
                    padding: '4px',
                    borderRadius: 'var(--radius-xs)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-danger)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  <Trash2 size={15} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Optional Linked Movie Banner if in Feed / Profile */}
      {showMovieInfo && reviewMovie.title && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            padding: '0.65rem',
            background: 'var(--bg-elevated)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          {reviewMovie.posterUrl && (
            <img
              src={reviewMovie.posterUrl}
              alt={reviewMovie.title}
              style={{
                width: '36px',
                height: '52px',
                borderRadius: '3px',
                objectFit: 'cover',
              }}
            />
          )}
          <div>
            <Link
              to={`/movies/${reviewMovie._id || review.movie}`}
              style={{
                fontSize: '0.92rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              {reviewMovie.title}
            </Link>
            {reviewMovie.releaseYear && (
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '0.35rem' }}>
                ({reviewMovie.releaseYear})
              </span>
            )}
          </div>
        </div>
      )}

      {/* Review Comment Text */}
      {review.comment && (
        <p
          style={{
            fontSize: '0.92rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            whiteSpace: 'pre-line',
          }}
        >
          {review.comment}
        </p>
      )}
    </article>
  );
};

export default ReviewCard;
