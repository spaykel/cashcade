import './Start.css'
import { useNavigate } from 'react-router-dom';

function Start() {
  const navigate = useNavigate();

  return (
    <div className="start-screen">
      <div className="logo-circle">$</div>
      <h1 className="app-title">CASHCADE</h1>
      <p className="tagline">Jobs That Fit Your Schedule,<br />Not the Other Way Around.</p>

      <button className="main-button" onClick={() => navigate('/create')}>Let’s get started</button>
      <div className="alt-login">
        <span>I already have an account</span>
        <button className="arrow-btn" onClick={() => navigate('/signin')}>→</button>
      </div>
    </div>
  );
}

export default Start
