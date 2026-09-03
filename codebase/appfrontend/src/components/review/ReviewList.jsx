import React from 'react';
import ReviewCard from './ReviewCard';
import { SkeletonReview } from '../ui/Skeleton';
import EmptyState from '../ui/EmptyState';
import { MessageSquarePlus } from 'lucide-react';

const ReviewList = ({
  reviews = [],
  isLoading = false,
  showMovieInfo = false,
  onReviewUpdated,
  onReviewDeleted,
  onEditClick,
  emptyTitle = 'No reviews yet',
  emptyDescription = 'Be the first to share your thoughts on this film.',
  onWriteReviewClick,
  className = '',
  style = {},
}) => {
  if (isLoading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', ...style }} className={className}>
        {[...Array(3)].map((_, i) => (
          <SkeletonReview key={i} />
        ))}
      </div>
    );
  }

  if (!reviews || reviews.length === 0) {
    return (
      <EmptyState
        icon={MessageSquarePlus}
        title={emptyTitle}
        description={emptyDescription}
        actionLabel={onWriteReviewClick ? 'Write a Review' : undefined}
        onAction={onWriteReviewClick}
        style={style}
      />
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        ...style,
      }}
      className={className}
    >
      {reviews.map((review) => (
        <ReviewCard
          key={review._id}
          review={review}
          showMovieInfo={showMovieInfo}
          onReviewUpdated={onReviewUpdated}
          onReviewDeleted={onReviewDeleted}
          onEditClick={onEditClick}
        />
      ))}
    </div>
  );
};

export default ReviewList;
