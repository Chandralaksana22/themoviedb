// MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  // You need to implement watchlist and favorite functionality here

  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieCard;
