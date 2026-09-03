import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, MapPin, Image, Save, ArrowLeft } from 'lucide-react';
import { authApi } from '../api';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';

const SettingsPage = () => {
  const { user, refreshUser } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [location, setLocation] = useState(user?.location || '');
  const [profilePictureUrl, setProfilePictureUrl] = useState(user?.profilePictureUrl || '');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setUsername(user.username || '');
      setEmail(user.email || '');
      setBio(user.bio || '');
      setLocation(user.location || '');
      setProfilePictureUrl(user.profilePictureUrl || '');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await authApi.updateProfile({
        username: username.trim().toLowerCase(),
        email: email.trim().toLowerCase(),
        bio: bio.trim(),
        location: location.trim(),
        profilePictureUrl: profilePictureUrl.trim(),
      });
      await refreshUser();
      toast.success('Profile settings updated successfully!');
      navigate('/profile/me');
    } catch (err) {
      toast.error(err.message || 'Failed to update profile.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div style={{ maxWidth: '640px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Back button & Page title */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(-1)}
          leftIcon={<ArrowLeft size={16} />}
          style={{ marginBottom: '0.5rem', paddingLeft: 0 }}
        >
          Back
        </Button>
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
          Account Preferences
        </span>
        <h1 style={{ fontSize: '2rem' }}>Edit Profile</h1>
      </div>

      {/* Settings Form Card */}
      <form
        onSubmit={handleSubmit}
        className="card-surface"
        style={{
          padding: '2rem',
          background: 'var(--bg-elevated)',
          borderRadius: 'var(--radius-lg)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        {/* Live Avatar Preview */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <img
            src={
              profilePictureUrl ||
              `https://placehold.co/100x100/171d27/00e054?text=${username?.charAt(0).toUpperCase() || 'U'}`
            }
            alt="Avatar Preview"
            style={{
              width: '68px',
              height: '68px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid var(--accent-green)',
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/100x100/171d27/00e054?text=${username?.charAt(0).toUpperCase() || 'U'}`;
            }}
          />
          <div style={{ flex: 1 }}>
            <Input
              label="Avatar Image URL"
              placeholder="https://example.com/avatar.jpg"
              value={profilePictureUrl}
              onChange={(e) => setProfilePictureUrl(e.target.value)}
              leftIcon={<Image size={16} />}
            />
          </div>
        </div>

        {/* Username */}
        <Input
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          leftIcon={<User size={16} />}
        />

        {/* Email */}
        <Input
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          leftIcon={<Mail size={16} />}
        />

        {/* Location */}
        <Input
          label="Location"
          placeholder="e.g. London, UK / New York, NY"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          leftIcon={<MapPin size={16} />}
        />

        {/* Bio */}
        <Textarea
          label="Bio"
          placeholder="Tell others about your taste in films, favorite directors, or top genres..."
          rows={4}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          helperText={`${bio.length} / 500 characters`}
        />

        {/* Submit */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
          <Button variant="ghost" size="md" onClick={() => navigate(-1)} disabled={isSaving}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" size="md" isLoading={isSaving} leftIcon={<Save size={16} />}>
            Save Profile
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
