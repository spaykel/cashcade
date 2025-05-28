import { useLocation, useNavigate } from 'react-router-dom';
import './BottomNav.css';

const navItems = [
  { path: '/home', icon: '🏠', label: 'Home' },
  { path: '/map', icon: '🗺️', label: 'Map' },
  { path: '/favorites', icon: '⭐', label: 'Favorites' },
  { path: '/tasks', icon: '📋', label: 'My Tasks' },
  { path: '/profile', icon: '👤', label: 'Profile' },
];

function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.path}
          className={`nav-button ${location.pathname === item.path ? 'active' : ''}`}
          onClick={() => navigate(item.path)}
        >
          <div className="nav-icon">{item.icon}</div>
          <div className="nav-label">{item.label}</div>
        </button>
      ))}
    </nav>
  );
}

export default BottomNav;
