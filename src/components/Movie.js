import React from "react";

function Movie(props) {
  //https://commons.wikimedia.org/wiki/File:No-Image-Placeholder.svg
  const posterSrc = props.movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`
    : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`;
  return (
    <div className="movieCard">
      <div className="moviePoster">
        <img src={posterSrc} alt={props.movie.title + " poster"} />
      </div>
      <div className="movieQuickView">
        <div className="movieTitle">{props.movie.title}</div>
        <div className="movieRating">
          <small>RATING: {props.movie.vote_average}</small>
        </div>
      </div>

      <div className="movieRelease">
        <small>RELEASED: {props.movie.release_date}</small>
      </div>
      <p className="movieDesc">{props.movie.overview}</p>
    </div>
  );
}

export default Movie;
