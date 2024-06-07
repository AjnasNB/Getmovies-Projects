import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://backendhoomans.vercel.app/api/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const addToFavorites = (movie) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(movie);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    <div>
      <h1>Movies</h1>
      <div className="movies-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-item">
            <img src={movie.banner_image} alt={movie.title} />
            <h2>{movie.title}</h2>
            <button onClick={() => addToFavorites(movie)}>Add to Favorites</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
