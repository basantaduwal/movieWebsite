# Movie Website

A simple React + Vite movie browsing app that lets users explore popular movies, search for titles, and save favorites locally.

## Features

- Browse a list of popular movies on the home page
- Search movies by title
- Add or remove movies from favorites
- Favorites are stored in browser local storage
- Navigation between Home and Favorites pages

## Tech Stack

- React
- Vite
- React Router
- TMDB API for movie data

## Project Structure

- src/pages: main pages such as Home and Favorites
- src/components: reusable UI components like MovieCard
- src/contexts: global state for favorites
- src/services: API calls to TMDB
- src/css: styling for the app

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm run dev
   ```
3. Open the local Vite URL shown in the terminal

## Build

To create a production build:

```bash
npm run build
```

## Notes

The app uses The Movie Database (TMDB) API to load movie data. A valid API key is already configured in the service layer for local development.
