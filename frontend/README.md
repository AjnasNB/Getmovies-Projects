# GetMovies Frontend

Welcome to the GetMovies frontend repository. This React application serves as the user interface for the GetMovies web application. It allows users to search for movies, view detailed information, and manage their favorite movies.

## Description

The GetMovies frontend application provides the following features:

- **Home Page**: Displays a list of movies fetched from the backend API.
- **Search Functionality**: Allows users to search for movies using the search bar at the top of the page. The list of movies updates in real-time to match the search query.
- **Movie Details Popup**: Clicking on a movie card opens a detailed popup modal with more information about the selected movie, including the plot, director, cast, and ratings from IMDb, Rotten Tomatoes, and Metacritic.
- **Favorites Management**: Users can click the heart icon on a movie card to add or remove it from their favorites.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them.

## Running the Application Locally

To run the application locally, follow these steps:


1. Navigate to the `frontend` folder:
   ```sh
   cd frontend```
2. Install the necessary dependencies:
```sh
npm install
```
3. Start the frontend development server:

```sh
npm start
```
### The frontend application should now be running on http://localhost:3000.

## Accessing the Application
#### You can also access the deployed frontend application at https://getmovies.ajnasnb.live/.