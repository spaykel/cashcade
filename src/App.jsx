import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Start from './pages/Start';
import CreateAccount from './pages/CreateAccount';
import VerifyStudent from './pages/VerifyStudent';
import Verified from './pages/Verified';
import SignIn from './pages/SignIn';

import Home from './pages/Home';
import Map from './pages/Map';
import Favorites from './pages/Favorites';
import Tasks from './pages/Tasks';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import MapPage from './pages/Map';
import Ask from './pages/Ask';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Onboarding flow */}
        <Route path="/" element={<Start />} />
        <Route path="/create" element={<CreateAccount />} />
        <Route path="/verify" element={<VerifyStudent />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/signin" element={<SignIn />} />

        {/* Main nav screens (with bottom nav) */}
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/ask" element={<Ask />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
