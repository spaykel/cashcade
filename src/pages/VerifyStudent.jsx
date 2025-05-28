import './VerifyStudent.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

function VerifyStudent() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = () => {
    if (!email.endsWith('.edu')) {
      setError('Please use a valid .edu email');
      return;
    }

    setError('');
    setLoading(true);

    setTimeout(() => {
      navigate('/verified');
    }, 2000);
  };

  return (
    <motion.div
      className="verify-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="verify-title">Verify You're a College Student</h1>
      <p className="verify-subtext">Enter your school email to continue</p>

      <input
        type="email"
        placeholder="yourname@university.edu"
        className="verify-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {error && <p className="error-text">{error}</p>}

      <button className="verify-button" onClick={handleVerify} disabled={loading}>
        {loading ? 'Verifying...' : 'Verify'}
      </button>

      {loading && <div className="spinner"></div>}

      <button className="back-button" onClick={() => navigate('/create')}>Back</button>
    </motion.div>
  );
}

export default VerifyStudent;
