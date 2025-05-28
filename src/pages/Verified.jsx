import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Verified() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="verify-screen"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="verify-title">You're Verified!</h1>
      <p className="verify-subtext">Welcome to Cashcade 🎉</p>

      <button
        className="verify-button"
        onClick={() => navigate('/home')}
      >
        Go to Home
      </button>
    </motion.div>
  );
}

export default Verified;
