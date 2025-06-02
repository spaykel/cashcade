import './Profile.css';
import ScreenWrapper from '../components/ScreenWrapper';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';

function UserProfile() {
  const { username } = useParams();
  const navigate = useNavigate();

  const user = {
    name: username,
    email: `${username.toLowerCase().replace(/\s/g, '')}@calpoly.edu`,
    posted: 5,
    completed: 8,
    rating: 4.7,
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐');
    }
    if (hasHalf) {
      stars.push('⭐️');
    }
    while (stars.length < 5) {
      stars.push('☆');
    }

    return stars.join(' ');
  };

  return (
    <ScreenWrapper>
      <motion.div
        className="profile-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="profile-header">
          <div className="avatar-circle">
            {user.name[0]}
          </div>
          <h2 className="profile-name">{user.name}</h2>
          <p className="profile-email">{user.email}</p>
          <p className="profile-rating">Rating: {renderStars(user.rating)} ({user.rating})</p>
        </div>

        <div className="profile-stats">
          <div className="profile-stat">
            <span className="stat-number">{user.posted}</span>
            <span className="stat-label">Tasks Posted</span>
          </div>
          <div className="profile-stat">
            <span className="stat-number">{user.completed}</span>
            <span className="stat-label">Tasks Completed</span>
          </div>
        </div>

        <div className="profile-actions">
          <button
            className="profile-button"
            onClick={() => navigate(-1)} // Go back
          >
            Back
          </button>
        </div>
      </motion.div>
    </ScreenWrapper>
  );
}

export default UserProfile;
