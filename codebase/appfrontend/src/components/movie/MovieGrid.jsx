import React from 'react';
import MovieCard from './MovieCard';
import { SkeletonMovieCard } from '../ui/Skeleton';
import EmptyState from '../ui/EmptyState';

const MovieGrid = ({
  movies = [],
  isLoading = false,
  showRemoveButton = false,
  onRemoveFromWatchlist,
  emptyTitle = 'No movies found',
  emptyDescription = 'Try adjusting your search or filters.',
  className = '',
  style = {},
}) => {
  if (isLoading) {
    return (
      <div className={`movie-grid ${className}`} style={style}>
        {[...Array(12)].map((_, i) => (
          <SkeletonMovieCard key={i} />
        ))}
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return <EmptyState title={emptyTitle} description={emptyDescription} />;
  }

  return (
    <div className={`movie-grid ${className}`} style={style}>
      {movies.map((movie) => (
        <MovieCard
          key={movie._id}
          movie={movie}
          showRemoveButton={showRemoveButton}
          onRemoveFromWatchlist={onRemoveFromWatchlist}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
