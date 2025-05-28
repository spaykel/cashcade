import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScreenWrapper from '../components/ScreenWrapper';
import { useState } from 'react';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // In real app: validate credentials
    navigate('/home'); // Always navigates to home for now
  };

  return (
    <ScreenWrapper>
      <motion.div
        className="signin-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="signin-title">Sign In</h1>

        <form className="signin-form" onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder="Email"
            className="signin-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="signin-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="signin-button">Enter</button>
        </form>
      </motion.div>
    </ScreenWrapper>
  );
}

export default SignIn;
