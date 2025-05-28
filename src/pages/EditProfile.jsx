import './EditProfile.css';
import ScreenWrapper from '../components/ScreenWrapper';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function EditProfile() {
  const navigate = useNavigate();
  const [name, setName] = useState('Your Name');
  const [email, setEmail] = useState('name@calpoly.edu');

  const handleSave = () => {
    // TODO: send data to backend or context
    navigate('/profile'); // navigate back to profile
  };

  return (
    <ScreenWrapper>
      <motion.div
        className="edit-profile-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="edit-title">Edit Profile</h1>
        <div className="edit-form">
          <label className="edit-label">Name</label>
          <input
            className="edit-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="edit-label">Email</label>
          <input
            className="edit-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="edit-save-button" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </motion.div>
    </ScreenWrapper>
  );
}

export default EditProfile;
