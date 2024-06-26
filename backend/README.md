# GetMovies Backend

Welcome to the GetMovies backend repository. This Node.js application serves as the backend API for the GetMovies web application. It handles data requests and serves movie information to the frontend.
You can access backend using https://backendhoomans.vercel.app
## Features

- **API Endpoints**: Provides endpoints to retrieve movie data and search for movies by title.
- **CORS Support**: Allows cross-origin requests.righnow any site can send request and access api.
- **Logging**: Logs all incoming requests.

## Project Structure

- **index.js**: Entry point of the application.
- **routes/api.js**: Defines the API routes.
- **vercel.json**: Configuration file for deployment on Vercel.

## Available Scripts

### `npm start`

Runs the backend server in production mode.

## Setting Up the Backend

To get started with the GetMovies backend, follow the instructions below.

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)

### Running the Backend Locally

1. Clone the repository and navigate to the `backend` folder:
   ```sh
   git clone https://github.com/yourusername/getmovies-backend.git
   cd getmovies-backend```
2. Install the necessary dependencies:
   ```sh
   npm install```
3. Setup vercel.json as follows
   ```json
   {
  "version": 2.0,
  "rewrites": [
    {
      "source":"/(.*)",
      "destination":"/api"
    }
  ]
    }```
4. Login to vercel
   ```sh
   vercel login```
5. Run locally using vercel
   ```sh
   vercel dev```
6. Can also host easily by vercel and give necessary details
   ```sh
   vercel```
# Alternative way to run.

If you prefer not to use Vercel, you can create a `dev.js` file to run the backend server locally:

1. Create a file named dev.js with the following content:
    ```js 
    const app = require('./index');
    const PORT = 3001;

    app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
    ```
2. Start the backend server:
   ```sh
   node dev.js
   ```
# API Endpoints

# Deployment
The backend is currently hosted on Vercel. You can access it at https://backendhoomans.vercel.app.

## Get Movies
    - Endpoint: /api/movies
    - Method: GET
    - Description: Retrieves the list of all movies.
## Example
   ```
   GET "https://backendhoomans.vercel.app/api/movies"
   ```
## Example Response:
   ```json
   [
  {
    "id": 1,
    "title": "Beetlejuice",
    "year": "1988",
    "genre": "Comedy",
    "banner_image": "https://example.com/beetlejuice.jpg"
  },
  {
    "id": 2,
    "title": "The Cotton Club",
    "year": "1984",
    "genre": "Crime",
    "banner_image": "https://example.com/cotton_club.jpg"
  }
  // ...more movies
  ]
  ```
## Search Movies
    - Endpoint: /api/movies/search
    - Method: GET
    - Query Parameter: title (string)
    - Description: Searches for movies by title.

## Example 
   ```
   GET "https://backendhoomans.vercel.app/api/movies/search?title=shawshank"
   ```
## Example Response:
   ```json
   [
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "year": "1994",
    "genre": "Drama",
    "banner_image": "https://example.com/shawshank.jpg"
  }
  
 ]```
