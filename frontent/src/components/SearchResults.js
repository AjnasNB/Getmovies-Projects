import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MovieCard from './MovieCard';
import './SearchResults.css';

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const [noData, setNoData] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const checkImage = (url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
      });
    };

    if (query) {
      axios.get(`https://backendhoomans.vercel.app/api/movies/search?title=${query}`)
        .then(async response => {
          console.log(response)
          const validMovies = response.data.filter(movie => movie.banner_image && movie.banner_image.startsWith('http'));
          const updatedMovies = validMovies.map(movie => {
            if (movie.banner_image.startsWith('http://')) {
              movie.banner_image = movie.banner_image.replace('http://', 'https://');
            }
            return movie;
          });

          const checkedMovies = [];
          for (const movie of updatedMovies) {
            const isValidImage = await checkImage(movie.banner_image);
            if (isValidImage) {
              checkedMovies.push(movie);
            }
          }

          setMovies(checkedMovies);
          setNoData(checkedMovies.length === 0);
        })
        .catch(error => {
          console.error('Error searching movies:', error);
          setNoData(true);
        });
    } else {
      setMovies([]);
      setNoData(false);
    }
  }, [query]);

  return (
    <div className="search-results">
      {noData ? (
        <div className="no-data">No data found for your search</div>
      ) : (
        <>
          <h2>Search Results</h2>
          <div className="movies">
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SearchResults;
