import React from "react";

function Movie(props) {
  //https://commons.wikimedia.org/wiki/File:No-Image-Placeholder.svg
  const posterSrc = props.movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`
    : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`;
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterSrc} alt={props.movie.title + " poster"} />
      </div>
      <div className="movie-quick-view">
        <div className="movie-title">{props.movie.title}</div>
        <div className="movie-rating">
          <small>RATING: {props.movie.vote_average}</small>
        </div>
      </div>

      <div className="movie-release">
        <small>RELEASED: {props.movie.release_date}</small>
      </div>
      <p className="movie-desc">{props.movie.overview}</p>
    </div>
  );
}

export default Movie;
