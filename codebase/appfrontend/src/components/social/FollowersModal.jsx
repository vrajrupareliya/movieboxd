import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import Pagination from '../ui/Pagination';
import { Skeleton } from '../ui/Skeleton';
import { socialApi } from '../../api';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

const FollowersModal = ({
  isOpen,
  onClose,
  userId,
  type = 'followers', // 'followers' or 'following'
  username = 'User',
}) => {
  const { user: currentUser, isAuthenticated, updateUserLocally } = useAuth();
  const toast = useToast();

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [actionLoadingId, setActionLoadingId] = useState(null);

  const fetchUsers = useCallback(async (page = 1) => {
    if (!userId) return;
    setLoading(true);
    try {
      const res =
        type === 'followers'
          ? await socialApi.getFollowers(userId, page, 10)
          : await socialApi.getFollowing(userId, page, 10);

      setList(type === 'followers' ? res.followers : res.following);
      setTotalPages(res.totalPages || 1);
      setCurrentPage(res.currentPage || 1);
    } catch (err) {
      toast.error(err.message || `Failed to load ${type}.`);
    } finally {
      setLoading(false);
    }
  }, [userId, type, toast]);

  useEffect(() => {
    if (isOpen) {
      fetchUsers(1);
    }
  }, [isOpen, fetchUsers]);

  const handleFollowToggle = async (targetUser) => {
    if (!isAuthenticated) {
      toast.info('Please log in to follow users.');
      return;
    }
    const targetId = targetUser._id;
    setActionLoadingId(targetId);

    try {
      await socialApi.followUser(targetId);
      updateUserLocally((prev) => ({
        ...prev,
        followingCount: (prev.followingCount || 0) + 1,
      }));
      fetchUsers(currentPage);
    } catch (err) {
      toast.error(err.message || 'Follow action failed.');
    } finally {
      setActionLoadingId(null);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${username}'s ${type === 'followers' ? 'Followers' : 'Following'}`}
      maxWidth="480px"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {loading ? (
          [...Array(5)].map((_, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 0' }}>
              <Skeleton width="40px" height="40px" borderRadius="50%" />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <Skeleton width="120px" height="14px" />
                <Skeleton width="180px" height="10px" />
              </div>
            </div>
          ))
        ) : list.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem 0' }}>
            No {type} found.
          </p>
        ) : (
          list.map((item) => {
            if (!item) return null;
            const isSelf = currentUser?._id === item._id;

            return (
              <div
                key={item._id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <Link
                  to={`/users/${item._id}`}
                  onClick={onClose}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
                >
                  <img
                    src={
                      item.profilePictureUrl ||
                      `https://placehold.co/100x100/171d27/00e054?text=${
                        item.username?.charAt(0).toUpperCase() || 'U'
                      }`
                    }
                    alt={item.username}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '1px solid var(--border-medium)',
                    }}
                  />
                  <div>
                    <h5 style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {item.username}
                    </h5>
                    {item.bio && (
                      <p
                        style={{
                          fontSize: '0.78rem',
                          color: 'var(--text-muted)',
                          maxWidth: '220px',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {item.bio}
                      </p>
                    )}
                  </div>
                </Link>

                {isAuthenticated && !isSelf && (
                  <Button
                    size="sm"
                    variant="outline"
                    isLoading={actionLoadingId === item._id}
                    onClick={() => handleFollowToggle(item)}
                  >
                    Follow
                  </Button>
                )}
              </div>
            );
          })
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(p) => fetchUsers(p)}
        />
      </div>
    </Modal>
  );
};

export default FollowersModal;
