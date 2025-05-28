import { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
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
  ]);

  const addTask = (newTask) => {
    setTasks((prev) => [{ ...newTask, id: Date.now() }, ...prev]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
