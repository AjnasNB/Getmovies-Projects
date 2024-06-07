// src/components/MovieCard.js

import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import './MovieCard.css';
import MovieModal from './MovieModal';

const MovieCard = ({ movie, onRemoveFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageValid, setImageValid] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some(fav => fav.id === movie.id));
  }, [movie.id]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageValid(true);
    img.onerror = () => setImageValid(false);
    img.src = movie.banner_image;
  }, [movie.banner_image]);

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      const newFavorites = favorites.filter(fav => fav.id !== movie.id);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorite(false);
      if (onRemoveFavorite) onRemoveFavorite(movie.id);
    } else {
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!imageValid) return null;

  return (
    <>
      <div className="movie-card" onClick={openModal}>
        <div className="movie-poster">
          <img src={movie.banner_image} alt={movie.title} />
          <FaHeart 
            className={`favorite-icon ${isFavorite ? 'favorite' : ''}`} 
            onClick={(e) => {
              e.stopPropagation();
              handleFavorite();
            }} 
          />
        </div>
        <div className="movie-details">
          <p className="movie-year">{movie.year}</p>
          <h3 className="movie-title">{movie.title}</h3>
          <p className="movie-genre">{movie.genre}</p>
        </div>
      </div>
      {isModalOpen && <MovieModal movieTitle={movie.title} isOpen={isModalOpen} onRequestClose={closeModal} />}
    </>
  );
};

export default MovieCard;
