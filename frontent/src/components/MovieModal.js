// src/components/MovieModal.js

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import './MovieModal.css';

const ratingLogos = {
  "Internet Movie Database": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png",
  "Rotten Tomatoes": "https://static-prod.adweek.com/wp-content/uploads/2018/03/rotten-tomatoes-blackred-CONTENT-2018.png",
  "Metacritic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Metacritic_logo_original.svg/1200px-Metacritic_logo_original.svg.png"
};

const MovieModal = ({ movieTitle, isOpen, onRequestClose }) => {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=9dfdcdd8`);
        const data = await response.json();
        setMovieData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie data:', error);
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [movieTitle]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!movieData) {
    return <div className="error">Error loading movie data</div>;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="movie-modal"
      overlayClassName="movie-modal-overlay"
      ariaHideApp={false}
    >
      <button className="close-button" onClick={onRequestClose}>
        <AiOutlineClose />
      </button>
      <div className="modal-content">
        <div className="modal-header">
          <img src={movieData.Poster} alt={movieData.Title} className="modal-poster" />
          <div className="movie-info">
            <h2>{movieData.Title} ({movieData.Year})</h2>
            <p>{movieData.Plot}</p>
            <p><strong>Director:</strong> {movieData.Director}</p>
            <p><strong>Writer:</strong> {movieData.Writer}</p>
            <p><strong>Actors:</strong> {movieData.Actors}</p>
            <p><strong>Genre:</strong> {movieData.Genre}</p>
            <p><strong>Language:</strong> {movieData.Language}</p>
            <p><strong>Awards:</strong> {movieData.Awards}</p>
          </div>
        </div>
        <div className="modal-footer">
          <div className="ratings">
            {movieData.Ratings.map((rating, index) => (
              <div key={index} className="rating">
                <img
                  src={ratingLogos[rating.Source]}
                  alt={rating.Source}
                  className="rating-logo"
                />
                <p>{rating.Value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MovieModal;
