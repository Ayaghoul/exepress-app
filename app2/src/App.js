import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Filter from "./Filter";
import MovieDescription from "./MovieDescription";
import MovieList from "./MovieList";

const initialMovies = [
  {
    title: "Inception",
    description: "A mind-bending thriller about dreams within dreams.",
    posterURL: "https://m.media-amazon.com/images/I/51xRj-6BzzL._AC_.jpg",
    rating: 5,
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    title: "Breaking Bad",
    description: "A chemistry teacher becomes a drug kingpin.",
    posterURL: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
    rating: 4,
    trailer: "https://www.youtube.com/embed/HhesaQXLuRY",
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (m) =>
      m.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      m.rating >= searchRating
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter
                searchTitle={searchTitle}
                setSearchTitle={setSearchTitle}
                searchRating={searchRating}
                setSearchRating={setSearchRating}
              />
              <MovieList movies={filteredMovies} addMovie={addMovie} />
            </>
          }
        />
        <Route
          path="/movie/:title"
          element={<MovieDescription movies={movies} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
