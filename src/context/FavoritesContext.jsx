import { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (task) => {
    setFavorites((prev) =>
      prev.find((t) => t.id === task.id)
        ? prev.filter((t) => t.id !== task.id)
        : [...prev, task]
    );
  };

  const isFavorited = (id) => {
    return favorites.some((task) => task.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorited }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
