import './Profile.css';
import ScreenWrapper from '../components/ScreenWrapper';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();

  // You can later replace this with dynamic user data
  const user = {
    name: 'Your Name',
    email: 'name@calpoly.edu',
    posted: 12,
    completed: 7,
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
          <button className="profile-button">Edit Profile</button>
          <button
            className="profile-button secondary"
            onClick={() => navigate('/')}
          >
            Log Out
          </button>
        </div>
      </motion.div>
    </ScreenWrapper>
  );
}

export default Profile;
