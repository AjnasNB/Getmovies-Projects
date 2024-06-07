// src/components/Favorites.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDropleft } from "react-icons/io";

import './Favorites.css';
import MovieCard from './MovieCard';

const Favorites = () => {
  const navigate = useNavigate();
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="favorites-container">
      <div className="favorites-header">
        <button className="back-button" onClick={handleBackClick}>
          <IoIosArrowDropleft className="back-icon" />
        </button>
        <h1>My Favourites</h1>
      </div>
      <div className="favorites-list">
        {favorites.length === 0 ? (
          <p>You have no favorite movies.</p>
        ) : (
          favorites.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
