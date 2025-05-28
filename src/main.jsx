import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { FavoritesProvider } from './context/FavoritesContext';
import { SignedUpTasksProvider } from './context/SignedUpTasksContext';
import { TaskProvider } from './context/TaskContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskProvider>
      <FavoritesProvider>
        <SignedUpTasksProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SignedUpTasksProvider>
      </FavoritesProvider>
    </TaskProvider>
  </React.StrictMode>
);
