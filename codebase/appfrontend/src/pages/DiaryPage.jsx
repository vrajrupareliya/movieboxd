import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Star, Calendar, MessageSquare } from 'lucide-react';
import { socialApi } from '../api';
import { useToast } from '../context/ToastContext';
import StarRating from '../components/ui/StarRating';
import Pagination from '../components/ui/Pagination';
import EmptyState from '../components/ui/EmptyState';
import { Skeleton } from '../components/ui/Skeleton';

const DiaryPage = () => {
  const toast = useToast();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const fetchDiary = useCallback(
    async (page = 1) => {
      setLoading(true);
      try {
        const res = await socialApi.getDiary(page, 10);
        setEntries(res.entries || []);
        setTotalPages(res.totalPages || 1);
        setCurrentPage(res.currentPage || 1);
        setTotalCount(res.totalCount || 0);
      } catch (err) {
        toast.error(err.message || 'Failed to load diary.');
      } finally {
        setLoading(false);
      }
    },
    [toast]
  );

  useEffect(() => {
    fetchDiary(1);
  }, [fetchDiary]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Page Header */}
      <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Diary</h1>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
          {totalCount} {totalCount === 1 ? 'film logged' : 'films logged'}
        </p>
      </div>

      {/* Diary Timeline Content */}
      {loading ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: '1.25rem',
                padding: '1.25rem',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <Skeleton width="60px" height="90px" />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Skeleton width="180px" height="18px" />
                <Skeleton width="100px" height="14px" />
                <Skeleton width="80%" height="14px" />
              </div>
            </div>
          ))}
        </div>
      ) : entries.length === 0 ? (
        <EmptyState
          icon={BookOpen}
          title="Your diary is currently empty"
          description="Log and review films from any movie page to keep a permanent chronological record of what you watch."
          actionLabel="Browse Films to Log"
          actionTo="/"
        />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {entries.map((entry) => {
            const movie = entry.movie || {};
            const loggedDate = entry.createdAt
              ? new Date(entry.createdAt).toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })
              : '';

            return (
              <article
                key={entry._id}
                className="card-surface animate-fade-in"
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  padding: '1.25rem',
                  alignItems: 'flex-start',
                }}
              >
                {/* Poster */}
                {movie.posterUrl && (
                  <Link to={`/movies/${movie._id}`} style={{ flexShrink: 0 }}>
                    <img
                      src={movie.posterUrl}
                      alt={movie.title}
                      style={{
                        width: '60px',
                        height: '90px',
                        borderRadius: 'var(--radius-poster)',
                        objectFit: 'cover',
                        boxShadow: 'var(--shadow-sm)',
                      }}
                    />
                  </Link>
                )}

                {/* Entry Details */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                      <Link
                        to={`/movies/${movie._id}`}
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                        }}
                      >
                        {movie.title}
                      </Link>
                      {movie.releaseYear && (
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginLeft: '0.4rem' }}>
                          ({movie.releaseYear})
                        </span>
                      )}
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.78rem',
                        color: 'var(--text-muted)',
                        fontWeight: 500,
                      }}
                    >
                      <Calendar size={13} />
                      <span>{loggedDate}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <StarRating rating={entry.rating} readOnly size="sm" showScore />

                  {/* Review Text */}
                  {entry.comment && (
                    <p
                      style={{
                        fontSize: '0.9rem',
                        lineHeight: 1.5,
                        color: 'var(--text-secondary)',
                        marginTop: '0.2rem',
                      }}
                    >
                      {entry.comment}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => fetchDiary(page)}
      />
    </div>
  );
};

export default DiaryPage;
