
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import tmdbApi from '../services/tmdbApi';

const HomePage = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nowPlayingData = await tmdbApi.getNowPlaying();
        const topRatedData = await tmdbApi.getTopRated();

        setNowPlaying(nowPlayingData.results || []);
        setTopRated(topRatedData.results || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Now Playing</h2>
      <div className="movie-list">
        {nowPlaying.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <h2>Top Rated</h2>
      <div className="movie-list">
        {topRated.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
