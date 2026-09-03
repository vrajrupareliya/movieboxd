import React, { useState, useEffect, useCallback } from 'react';
import { Activity, Users } from 'lucide-react';
import { socialApi } from '../api';
import { useToast } from '../context/ToastContext';
import FeedItem from '../components/social/FeedItem';
import Pagination from '../components/ui/Pagination';
import EmptyState from '../components/ui/EmptyState';
import { Skeleton } from '../components/ui/Skeleton';

const FeedPage = () => {
  const toast = useToast();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const fetchFeed = useCallback(
    async (page = 1) => {
      setLoading(true);
      try {
        const res = await socialApi.getFeed(page, 8);
        setItems(res.items || []);
        setTotalPages(res.totalPages || 1);
        setCurrentPage(res.currentPage || 1);
        setTotalCount(res.totalCount || 0);
      } catch (err) {
        toast.error(err.message || 'Failed to load activity feed.');
      } finally {
        setLoading(false);
      }
    },
    [toast]
  );

  useEffect(() => {
    fetchFeed(1);
  }, [fetchFeed]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
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
        <h1 style={{ fontSize: '2rem' }}>Activity</h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
          Recent reviews and ratings from members you follow.
        </p>
      </div>

      {/* Feed List */}
      {loading ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              style={{
                padding: '1.25rem',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
              }}
            >
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Skeleton width="40px" height="40px" borderRadius="50%" />
                <Skeleton width="140px" height="16px" />
              </div>
              <Skeleton height="80px" />
            </div>
          ))}
        </div>
      ) : items.length === 0 ? (
        <EmptyState
          icon={Users}
          title="No activity in your feed yet"
          description="Follow other cinephiles to see their reviews and film ratings right here in your stream."
          actionLabel="Explore Popular Films"
          actionTo="/"
        />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {items.map((item) => (
            <FeedItem key={item._id} item={item} />
          ))}
        </div>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => fetchFeed(page)}
      />
    </div>
  );
};

export default FeedPage;
