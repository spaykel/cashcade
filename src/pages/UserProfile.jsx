import './Profile.css';
import ScreenWrapper from '../components/ScreenWrapper';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

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

  const [showChat, setShowChat] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (messageInput.trim() === '') return;

    setMessages((prev) => [...prev, { sender: 'You', text: messageInput }]);
    setMessageInput('');
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
        {/* Top Bar with Back Button */}
        <div className="top-bar">
          <button
            className="icon-button"
            onClick={() => navigate(-1)}
          >
            🡠
          </button>
          <div style={{ width: '32px' }} /> {/* Spacer to balance layout */}
        </div>

        {/* Profile content */}
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
            onClick={() => setShowChat(true)}
          >
            Message {user.name}
          </button>
        </div>

        {/* Chat popup */}
        {showChat && (
          <div
            className="chat-overlay"
            onClick={() => setShowChat(false)}
          >
            <div
              className="chat-box"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="chat-header">
                <h3>Chat with {user.name}</h3>
                <button className="modal-close" onClick={() => setShowChat(false)}>❌</button>
              </div>
              <div className="chat-messages">
                {messages.length === 0 && (
                  <p className="chat-placeholder">No messages yet.</p>
                )}
                {messages.map((msg, index) => (
                  <div key={index} className="chat-message">
                    <strong>{msg.sender}:</strong> {msg.text}
                  </div>
                ))}
              </div>
              <div className="chat-input-area">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  className="chat-input"
                />
                <button
                  className="chat-send-button"
                  onClick={handleSendMessage}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </ScreenWrapper>
  );
}

export default UserProfile;
