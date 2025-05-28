import './Map.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { motion } from 'framer-motion';
import ScreenWrapper from '../components/ScreenWrapper';
import L from 'leaflet';
import { useEffect, useRef, useState } from 'react';

// Fake user location (Cal Poly SLO)
const userLocation = [35.3004, -120.6625];

// Fake task locations
const tasks = [
  {
    id: 1,
    title: 'Help move stuff',
    price: '$40',
    coords: [35.3010, -120.6635],
    category: 'Moving',
  },
  {
    id: 2,
    title: 'Take grad pics 📸',
    price: '$60',
    coords: [35.2995, -120.6610],
    category: 'Photography',
  },
  {
    id: 3,
    title: 'Set up DJ booth 🎧',
    price: '$75',
    coords: [35.2988, -120.6650],
    category: 'Music',
  },
];

// Custom marker icon
const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
});

// Component to recenter the map
function RecenterButton({ position }) {
  const map = useMap();
  return (
    <button
      className="recenter-button"
      onClick={() => map.setView(position, 15)}
    >
      ⟳ Center
    </button>
  );
}

function MapPage() {
  const mapRef = useRef(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    }, 600);

    return () => clearTimeout(timeout);
  }, []);

  const filteredTasks =
    filter === 'All'
      ? tasks
      : tasks.filter((task) => task.category === filter);

  return (
    <ScreenWrapper>
      <motion.div
        className="map-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="map-header">
          <h1 className="map-title">Tasks Near You</h1>
          <div className="map-meta">
            <p>{filteredTasks.length} tasks found</p>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="filter-dropdown"
            >
              <option>All</option>
              <option>Moving</option>
              <option>Photography</option>
              <option>Music</option>
            </select>
          </div>
        </div>

        <MapContainer
          center={userLocation}
          zoom={15}
          scrollWheelZoom={true}
          className="map-container"
          whenCreated={(mapInstance) => {
            mapRef.current = mapInstance;
          }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={userLocation} icon={icon}>
            <Popup>You are here 📍</Popup>
          </Marker>

          {filteredTasks.map((task) => (
            <Marker key={task.id} position={task.coords} icon={icon}>
              <Popup>
                <strong>{task.title}</strong><br />
                {task.price}
              </Popup>
            </Marker>
          ))}

          <RecenterButton position={userLocation} />
        </MapContainer>
      </motion.div>
    </ScreenWrapper>
  );
}

export default MapPage;
