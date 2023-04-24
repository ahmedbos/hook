import React from "react";
import StarRatingComponent from 'react-star-rating-component';
const Movie = ( {movie} ) => {
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={movie.posterUrl}
        />
      </div>
      <StarRatingComponent 
          name="rate2" 
          editing={false}
          starCount={5}
          value={movie.rate}
        />
      
      <p>{movie.description}</p>
    </div>
  );
};


export default Movie;