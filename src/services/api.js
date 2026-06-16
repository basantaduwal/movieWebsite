const API_KEY = "64aea69cd50aaee12e249c1983bfdbc7";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/popular?query=${encodeURIComponent(query)}`,
  );
  const data = await response.json();
  return data.results;
};
