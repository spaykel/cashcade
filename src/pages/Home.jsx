import './Home.css';
import { motion } from 'framer-motion';
import ScreenWrapper from '../components/ScreenWrapper';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { useSignedUpTasks } from '../context/SignedUpTasksContext';

const mockTasks = [
  {
    id: 1,
    title: 'DJ for Club Event',
    postedBy: 'Alex J.',
    price: '$75',
    time: 'Sat 9pm',
  },
  {
    id: 2,
    title: 'Need Graduation Photos',
    postedBy: 'Sarah L.',
    price: '$40',
    time: 'This Sunday',
  },
  {
    id: 3,
    title: 'Help Move Dorm Stuff',
    postedBy: 'Danny K.',
    price: '$50',
    time: 'Tomorrow afternoon',
  },
];

function Home() {
  const navigate = useNavigate();
  const [selectedTask, setSelectedTask] = useState(null);
  const { toggleFavorite, isFavorited } = useFavorites();
  const { signUpForTask, signedUpTasks } = useSignedUpTasks();

  const isSignedUp = (taskId) => signedUpTasks.some(t => t.id === taskId);

  return (
    <ScreenWrapper>
      <motion.div
        className="home-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="top-bar">
          <button className="icon-button" onClick={() => navigate('/profile')}>
            👤
          </button>
          <h1 className="home-header">Cashcade</h1>
          <button className="icon-button" onClick={() => navigate('/settings')}>
            ⚙️
          </button>
        </div>

        <p className="home-subtext">Find tasks other students need done</p>

        <div className="task-feed">
          {mockTasks.map((task) => (
            <div
              key={task.id}
              className="task-card"
              onClick={() => setSelectedTask(task)}
            >
              <h2 className="task-title">{task.title}</h2>
              <p className="task-meta">{task.postedBy} • {task.time}</p>
              <p className="task-price">{task.price}</p>
            </div>
          ))}
        </div>

        <button className="fab-button" onClick={() => navigate('/ask')}>＋</button>

        {selectedTask && (
          <div className="task-modal-overlay" onClick={() => setSelectedTask(null)}>
            <div className="task-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedTask(null)}>
                ❌
              </button>
              <h2 className="modal-title">{selectedTask.title}</h2>
              <p className="modal-meta">{selectedTask.postedBy} • {selectedTask.time}</p>
              <p className="modal-description">
                This is a placeholder for task details like location, a longer description,
                and contact info. In a real version, this would show all posted details.
              </p>
              <p className="modal-price">{selectedTask.price}</p>

              <button
                className="favorite-button"
                onClick={() => toggleFavorite(selectedTask)}
              >
                {isFavorited(selectedTask.id) ? '❤️ Favorited' : '🤍 Add to Favorites'}
              </button>

              <button
                className="signup-button"
                onClick={() => signUpForTask(selectedTask)}
                disabled={isSignedUp(selectedTask.id)}
              >
                {isSignedUp(selectedTask.id) ? '✅ Signed Up' : '📝 Sign Up for Task'}
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </ScreenWrapper>
  );
}

export default Home;
