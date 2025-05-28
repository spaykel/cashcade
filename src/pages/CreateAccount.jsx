import './CreateAccount.css';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
  const navigate = useNavigate();

  return (
    <div className="create-account">
      <h1 className="title">Create Account</h1>

      <div className="photo-upload-wrapper">
        <div className="photo-upload">
            <span className="camera-icon">📷</span>
        </div>
        </div>

      <input type="email" placeholder="Email" className="input" />
      <input type="password" placeholder="Password" className="input" />
      
      <div className="input phone-input">
        <span className="flag">🇺🇸</span>
        <input type="text" placeholder="Your number" className="phone-text" />
      </div>

      <button
        className="done-button"
        onClick={() => navigate('/verify')}
      >
        Done
      </button>

      <button className="cancel-button" onClick={() => navigate('/')}>
        Cancel
      </button>
    </div>
  );
}

export default CreateAccount;
