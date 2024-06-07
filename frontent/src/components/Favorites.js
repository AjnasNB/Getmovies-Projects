// src/components/Favorites.js

import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './Favorites.css'; // Create a CSS file for favorites styles

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="favorites">
      <h2>My Favorites</h2>
      <div className="favorite-movies">
        {favorites.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
