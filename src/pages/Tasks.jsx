import './Tasks.css';
import { useSignedUpTasks } from '../context/SignedUpTasksContext';
import ScreenWrapper from '../components/ScreenWrapper';

function Tasks() {
  const { signedUpTasks } = useSignedUpTasks();

  return (
    <ScreenWrapper>
      <div className="tasks-page">
        <h1 className="tasks-title">My Tasks</h1>

        {signedUpTasks.length === 0 ? (
          <p className="tasks-empty">You haven't signed up for any tasks yet.</p>
        ) : (
          <div className="tasks-list">
            {signedUpTasks.map((task) => (
              <div key={task.id} className="task-card">
                <h2 className="task-title">{task.title}</h2>
                <p className="task-meta">
                  {task.postedBy} • {task.time}
                </p>
                <p className="task-price">{task.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </ScreenWrapper>
  );
}

export default Tasks;
