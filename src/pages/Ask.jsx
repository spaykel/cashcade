import './Ask.css';
import { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';
import ScreenWrapper from '../components/ScreenWrapper';

function Ask() {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price || !time) return;

    addTask({ title, price, time, postedBy: 'You' });
    navigate('/home');
  };

  return (
    <ScreenWrapper>
      <div className="ask-container">
        <h1>Ask for a Task</h1>
        <form className="ask-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="What do you need done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Price (e.g. $50)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="When do you need it?"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button type="submit">Post Task</button>
        </form>
      </div>
    </ScreenWrapper>
  );
}

export default Ask;
