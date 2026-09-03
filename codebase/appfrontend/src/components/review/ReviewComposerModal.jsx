import React, { useState, useEffect } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import Textarea from '../ui/Textarea';
import StarRating from '../ui/StarRating';
import { reviewsApi } from '../../api';

const ReviewComposerModal = ({
  isOpen,
  onClose,
  movie,
  initialReview = null,
  onSuccess,
}) => {
  const isEditing = Boolean(initialReview && initialReview._id);

  const [rating, setRating] = useState(initialReview?.rating || 0);
  const [comment, setComment] = useState(initialReview?.comment || '');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setRating(initialReview?.rating || 0);
      setComment(initialReview?.comment || '');
      setError('');
    }
  }, [isOpen, initialReview]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      setError('Please choose a star rating (1 to 5 stars).');
      return;
    }
    setError('');
    setIsSubmitting(true);

    try {
      if (isEditing) {
        const updated = await reviewsApi.update(initialReview._id, { rating, comment });
        if (onSuccess) onSuccess(updated);
      } else {
        const created = await reviewsApi.create(movie._id, { rating, comment });
        if (onSuccess) onSuccess(created);
      }
      onClose();
    } catch (err) {
      setError(err.message || 'Failed to submit review.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditing ? `Edit Review - ${movie?.title || 'Film'}` : `Log / Review - ${movie?.title || 'Film'}`}
      maxWidth="500px"
    >
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Movie Info Snippet */}
        {movie && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.75rem',
              background: 'var(--bg-surface)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            {movie.posterUrl && (
              <img
                src={movie.posterUrl}
                alt={movie.title}
                style={{ width: '45px', height: '65px', borderRadius: '4px', objectFit: 'cover' }}
              />
            )}
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{movie.title}</h4>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Directed by {movie.director} ({movie.releaseYear})
              </span>
            </div>
          </div>
        )}

        {/* Rating Selector */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', padding: '0.5rem 0' }}>
          <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
            Your Rating
          </span>
          <StarRating rating={rating} onChange={(val) => setRating(val)} readOnly={false} size="xl" showScore />
        </div>

        {/* Comment Textarea */}
        <Textarea
          label="Review / Notes (Optional)"
          placeholder="Share your thoughts, favorite scenes, or what made this film memorable..."
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          helperText={`${comment.length} / 5000 characters`}
        />

        {error && (
          <div
            style={{
              padding: '0.65rem 0.85rem',
              background: 'var(--accent-danger-subtle)',
              border: '1px solid var(--accent-danger)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--accent-danger)',
              fontSize: '0.85rem',
            }}
          >
            {error}
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
          <Button variant="ghost" size="md" onClick={onClose} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" size="md" isLoading={isSubmitting}>
            {isEditing ? 'Save Changes' : 'Publish Review'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ReviewComposerModal;
