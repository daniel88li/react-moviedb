import React, { useState } from "react";
import Movie from "./Movie";
import { movieD } from "../1";

function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(movieD[0].results);

  const search = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=8bbd42c8f6d05fecfaedb9d9b4bb52fe&language=en-US&query=${query}&page=1`;

    try {
      let response = await fetch(url);
      if (!response.ok) {
        console.log(`HTTP error! status: ${response.status}`);
      } else {
        let res = await response.json();
        setMovies(res.results);
      }
    } catch (err) {
      console.error(err);
    }
  };

  function handleChange(e) {
    const { value } = e.target;
    setQuery(value);
  }

  const movieComponents = movies.map((movie) => {
    return <Movie key={movie.id} movie={movie} />;
  });

  return (
    <div className="searchResultDiv">
      <form className="form" onSubmit={search}>
        <label className="label" htmlFor="query">
          Search Movie:
        </label>
        <div className="searchDiv">
          <input
            type="text"
            id="movieInput"
            name="query"
            placeholder="i.e. Tenet"
            value={query}
            onChange={handleChange}
          />
          <button type="submit" id="searchBtn">
            Search
          </button>
        </div>
      </form>
      <div className="movieContainer">
        {movieComponents}
        <div className="movieCard hidden"></div>
      </div>
    </div>
  );
}

export default SearchMovies;
