import './Favorites.css';
import { useFavorites } from '../context/FavoritesContext';
import ScreenWrapper from '../components/ScreenWrapper';

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <ScreenWrapper>
      <div className="favorites-screen">
        <h1 className="favorites-title">Favorited Tasks</h1>

        {favorites.length === 0 ? (
          <p className="favorites-empty">No tasks favorited yet.</p>
        ) : (
          favorites.map((task) => (
            <div key={task.id} className="favorite-task-card">
              <h2 className="favorite-task-title">{task.title}</h2>
              <p className="favorite-task-meta">{task.postedBy} • {task.time}</p>
              <p className="favorite-task-price">{task.price}</p>
            </div>
          ))
        )}
      </div>
    </ScreenWrapper>
  );
}

export default Favorites;
