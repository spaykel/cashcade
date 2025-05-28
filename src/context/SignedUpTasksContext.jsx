import React, { createContext, useContext, useState } from 'react';

const SignedUpTasksContext = createContext();

export const useSignedUpTasks = () => useContext(SignedUpTasksContext);

export const SignedUpTasksProvider = ({ children }) => {
  const [signedUpTasks, setSignedUpTasks] = useState([]);

  const signUpForTask = (task) => {
    setSignedUpTasks((prev) => {
      // Avoid duplicates
      if (prev.find((t) => t.id === task.id)) return prev;
      return [...prev, task];
    });
  };

  return (
    <SignedUpTasksContext.Provider value={{ signedUpTasks, signUpForTask }}>
      {children}
    </SignedUpTasksContext.Provider>
  );
};
