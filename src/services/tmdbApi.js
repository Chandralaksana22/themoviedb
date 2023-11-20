const TMDB_API_KEY = 'abbd02e76ca540eeda3a5bcc3fa5c685';
const TMDB_API_BASE = 'https://api.themoviedb.org/4';

const tmdbApi = {
    getNowPlaying: async () => {
      try {
        const response = await fetch(`${TMDB_API_BASE}/movie/now_playing?api_key=${TMDB_API_KEY}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching Now Playing movies:', error);
        throw error;
      }
    },
    getTopRated: async () => {
      try {
        const response = await fetch(`${TMDB_API_BASE}/movie/top_rated?api_key=${TMDB_API_KEY}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching Top Rated movies:', error);
        throw error;
      }
    },
    searchMovies: async (query) => {
      try {
        const response = await fetch(`${TMDB_API_BASE}/search/movie?api_key=${TMDB_API_KEY}&query=${query}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error searching movies:', error);
        throw error;
      }
    },
    getMovieDetails: async (movieId) => {
      try {
        const response = await fetch(`${TMDB_API_BASE}/movie/${movieId}?api_key=${TMDB_API_KEY}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
      }
    },
  };
  
  export default tmdbApi;