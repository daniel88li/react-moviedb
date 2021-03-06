import React from "react";

function SearchMovies() {
  const search = async (e) => {
    e.preventDefault();
    console.log("search");
    const query = "Jurassic Park";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=8bbd42c8f6d05fecfaedb9d9b4bb52fe&language=en-US&query=${query}&page=1`;

    try {
      let response = await fetch(url);
      if (!response.ok) {
        console.log(`HTTP error! status: ${response.status}`);
      } else {
        let res = await response.json();

        console.log(res);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="form" onSubmit={(e) => search(e)}>
      <label className="label" htmlFor="query">
        Search Movie:
      </label>
      <div className="searchDiv">
        <input
          type="text"
          id="movieInput"
          name="query"
          placeholder="i.e. Tenet"
        ></input>
        <button type="submit" id="searchBtn">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchMovies;
