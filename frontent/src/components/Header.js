// src/components/Header.js

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import './Header.css';
import logo from '../assets/logo.png';  // Import the logo image

const Header = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (query) {
      navigate(`/search?query=${query}`);
    }
  }, [query, navigate]);

  const clearSearch = () => {
    setQuery('');
    setIsFocused(false);
    navigate('/');
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!query) {
      setIsFocused(false);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/" className="logo-link">
            <div className="logo-container">
              <img src={logo} alt="Logo" />
            </div>
            <h1>GET MOVIES</h1>
          </Link>
        </div>
        <div className="search-bar-container">
          <div className="search-bar">
            <AiOutlineSearch className="search-icon" style={{ color: 'black', backgroundColor: 'white' }} />
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)} 
              placeholder="Search movies and series" 
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{ paddingLeft: '35px' }}  // Inline style to set padding for the placeholder
            />
            {query && <button className="clear-button" onClick={clearSearch}><AiOutlineClose /></button>}
          </div>
        </div>
        {!isFocused && (
          <div className="favorites-button">
            <Link to="/favorites">
              <button>
                <FaHeart /> My Favorites
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
