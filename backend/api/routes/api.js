const express = require('express');
const router = express.Router();
const movies = require('../movies.json');

// Get all movies
router.get('/movies', (req, res) => {
    console.log("Fetching all movies");
    res.json(movies);
});

// Search movies by title
router.get('/movies/search', (req, res) => {
    console.log("Searching movies with title:", req.query.title);
    const title = req.query.title.toLowerCase();
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(title)
    );
    res.json(filteredMovies);
});

// Fallback route for undefined routes to help with debugging
router.all('*', (req, res) => {
    console.log(`Unhandled route: ${req.method} ${req.url}`);
    res.status(404).json({ error: "Route not found" });
});

module.exports = router;
