import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { User, MapPin, Calendar, Edit3, UserPlus, UserCheck, Film, Bookmark, MessageSquare } from 'lucide-react';
import { usersApi, reviewsApi, socialApi, authApi } from '../api';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import ReviewList from '../components/review/ReviewList';
import FollowersModal from '../components/social/FollowersModal';
import Button from '../components/ui/Button';
import Pagination from '../components/ui/Pagination';
import { Skeleton } from '../components/ui/Skeleton';
import Avatar from '../components/ui/Avatar';

const UserProfilePage = () => {
  const { userId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { user: currentUser, isAuthenticated, updateUserLocally } = useAuth();
  const toast = useToast();

  const isMe = location.pathname === '/profile/me' || (currentUser && currentUser._id === userId);
  const targetId = isMe ? currentUser?._id : userId;

  const [profile, setProfile] = useState(isMe ? currentUser : null);
  const [reviews, setReviews] = useState([]);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalReviews, setTotalReviews] = useState(0);

  const [isFollowing, setIsFollowing] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);

  // Modal State for Followers / Following lists
  const [modalState, setModalState] = useState({ isOpen: false, type: 'followers' });

  // Fetch Profile
  const fetchProfile = useCallback(async () => {
    if (!targetId) {
      if (isMe && !currentUser) {
        navigate('/login');
      }
      return;
    }

    setLoadingProfile(true);
    try {
      if (isMe) {
        const me = await authApi.getMe();
        setProfile(me);
      } else {
        const data = await usersApi.getUserProfile(targetId);
        setProfile(data);
      }
    } catch (err) {
      toast.error(err.message || 'Failed to load user profile.');
    } finally {
      setLoadingProfile(false);
    }
  }, [targetId, isMe, currentUser, navigate, toast]);

  // Fetch User's Reviews
  const fetchUserReviews = useCallback(
    async (page = 1) => {
      if (!targetId) return;
      setLoadingReviews(true);
      try {
        const res = await reviewsApi.getUserReviews(targetId, page, 8);
        setReviews(res.reviews || []);
        setTotalPages(res.totalPages || 1);
        setCurrentPage(res.currentPage || 1);
        setTotalReviews(res.totalCount || 0);
      } catch {
        // Handled silently; reviews remain empty or previous state
      } finally {
        setLoadingReviews(false);
      }
    },
    [targetId]
  );

  useEffect(() => {
    fetchProfile();
    fetchUserReviews(1);
  }, [fetchProfile, fetchUserReviews]);

  const handleFollowToggle = async () => {
    if (!isAuthenticated) {
      toast.info('Please log in to follow this member.');
      navigate('/login');
      return;
    }

    setFollowLoading(true);
    const prevCount = profile?.followersCount || 0;
    const willFollow = !isFollowing;

    // Optimistic UI
    setIsFollowing(willFollow);
    setProfile((prev) => ({
      ...prev,
      followersCount: willFollow ? prevCount + 1 : Math.max(0, prevCount - 1),
    }));

    try {
      if (willFollow) {
        await socialApi.followUser(profile._id);
        updateUserLocally((prev) => ({
          ...prev,
          followingCount: (prev.followingCount || 0) + 1,
        }));
      } else {
        await socialApi.unfollowUser(profile._id);
        updateUserLocally((prev) => ({
          ...prev,
          followingCount: Math.max(0, (prev.followingCount || 0) - 1),
        }));
      }
    } catch (err) {
      setIsFollowing(!willFollow);
      setProfile((prev) => ({ ...prev, followersCount: prevCount }));
      toast.error(err.message || 'Follow action failed.');
    } finally {
      setFollowLoading(false);
    }
  };

  if (loadingProfile && !profile) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Skeleton height="220px" borderRadius="var(--radius-lg)" />
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Skeleton width="100px" height="100px" borderRadius="50%" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Skeleton width="180px" height="24px" />
            <Skeleton width="260px" height="14px" />
          </div>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h2>User Not Found</h2>
        <p style={{ margin: '1rem 0', color: 'var(--text-secondary)' }}>This member profile could not be loaded.</p>
        <Link to="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      {/* Profile Header Card */}
      <section
        className="card-surface animate-fade-in"
        style={{
          position: 'relative',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border-medium)',
        }}
      >
        {/* Cover Graphic / Banner */}
        <div
          style={{
            height: '140px',
            background: 'linear-gradient(135deg, #111111 0%, #161616 60%, rgba(232, 163, 61, 0.06) 100%)',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        />

        {/* Profile Content Details */}
        <div
          style={{
            padding: '0 2rem 2rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            position: 'relative',
          }}
        >
          {/* Avatar and Top Actions row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginTop: '-50px',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <Avatar
              src={profile.profilePictureUrl}
              name={profile.username}
              size={96}
              fontSize="2rem"
              style={{
                border: '3px solid var(--border-medium)',
                boxShadow: 'var(--shadow-md)',
              }}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {isMe ? (
                <Link to="/settings">
                  <Button variant="outline" size="sm" leftIcon={<Edit3 size={15} />}>
                    Edit Profile
                  </Button>
                </Link>
              ) : (
                <Button
                  variant={isFollowing ? 'secondary' : 'primary'}
                  size="sm"
                  isLoading={followLoading}
                  onClick={handleFollowToggle}
                  leftIcon={isFollowing ? <UserCheck size={16} /> : <UserPlus size={16} />}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </Button>
              )}
            </div>
          </div>

          {/* User Bio & Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.8rem', fontWeight: 600, letterSpacing: '-0.02em' }}>{profile.username}</h1>

            {profile.bio && (
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', maxWidth: '640px', lineHeight: 1.6 }}>
                {profile.bio}
              </p>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              {profile.location && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <MapPin size={14} /> {profile.location}
                </span>
              )}
              {profile.createdAt && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Calendar size={14} /> Joined {new Date(profile.createdAt).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
                </span>
              )}
            </div>
          </div>

          {/* Stat Counters Bar */}
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '1.25rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
              <span style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>
                {totalReviews}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Reviews logged
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
              <span style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>
                {profile.watchlist?.length || 0}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Watchlist
              </span>
            </div>

            <button
              type="button"
              onClick={() => setModalState({ isOpen: true, type: 'followers' })}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.1rem',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--accent-primary)', fontVariantNumeric: 'tabular-nums' }}>
                {profile.followersCount || 0}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Followers
              </span>
            </button>

            <button
              type="button"
              onClick={() => setModalState({ isOpen: true, type: 'following' })}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.1rem',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--accent-primary)', fontVariantNumeric: 'tabular-nums' }}>
                {profile.followingCount || 0}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Following
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* User Reviews / Activity Timeline */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
          <h2 style={{ fontSize: '1.4rem' }}>
            {isMe ? 'My Reviews & Logged Films' : `${profile.username}'s Reviews`}
          </h2>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {totalReviews} {totalReviews === 1 ? 'film' : 'films'}
          </span>
        </div>

        <ReviewList
          reviews={reviews}
          isLoading={loadingReviews}
          showMovieInfo={true}
          emptyTitle="No reviews yet"
          emptyDescription={isMe ? 'You have not logged any films yet.' : `${profile.username} hasn't logged any films yet.`}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => fetchUserReviews(page)}
        />
      </section>

      {/* Followers / Following Modal */}
      <FollowersModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, type: 'followers' })}
        userId={profile._id}
        type={modalState.type}
        username={profile.username}
      />
    </div>
  );
};

export default UserProfilePage;