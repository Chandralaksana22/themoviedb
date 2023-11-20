
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../services/tmdbApi';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await tmdbApi.getMovieDetails(id);
        setMovieDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      {movieDetails ? (
        <div>
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
