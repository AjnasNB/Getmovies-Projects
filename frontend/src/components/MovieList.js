// src/components/MovieList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://backendhoomans.vercel.app/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  const handleRemoveFavorite = (movieId) => {
    setMovies(prevMovies => prevMovies.filter(movie => movie.id !== movieId));
  };

  return (
    <div className="movie-list-container">
      <h2>Movies</h2>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} onRemoveFavorite={handleRemoveFavorite} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
