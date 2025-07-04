import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, width: 250 }}>
      <img src={movie.posterURL} alt={movie.title} style={{ width: "100%" }} />
      <h3>{movie.title}</h3>
      <p>Note : {"⭐".repeat(movie.rating)}</p>

      <Link to={`/movie/${movie.title}`}>Voir la description</Link>
    </div>
  );
}

export default MovieCard;
