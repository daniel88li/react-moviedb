import React from "react";
import SearchMovies from "./components/SearchMovies";
import Credits from "./components/Credits";

function App() {
  return (
    <div className="main">
      <div className="container">
        <h1 className="title">Movie Search App</h1>
        <SearchMovies />
      </div>
      <Credits />
    </div>
  );
}

export default App;
