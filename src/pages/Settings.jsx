import ScreenWrapper from '../components/ScreenWrapper';
import { motion } from 'framer-motion';
import './Settings.css';
import { useNavigate } from 'react-router-dom';

function Settings() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Future: Clear user session if applicable
    navigate('/');
  };

  return (
    <ScreenWrapper>
      <motion.div
        className="settings-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="settings-title">Settings</h1>

        <div className="settings-section">
          <h2 className="settings-subheading">Account</h2>
          <button className="settings-button">Change Email</button>
          <button className="settings-button">Change Password</button>
        </div>

        <div className="settings-section">
          <h2 className="settings-subheading">Preferences</h2>
          <button className="settings-button">Notification Settings</button>
          <button className="settings-button">App Theme</button>
        </div>

        <div className="settings-section">
          <h2 className="settings-subheading">Support</h2>
          <button className="settings-button">Contact Us</button>
          <button className="settings-button">Terms & Privacy</button>
        </div>

        <div className="settings-footer">
          <button className="logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </motion.div>
    </ScreenWrapper>
  );
}

export default Settings;
