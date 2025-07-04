import React from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDescription({ movies }) {
  const { title } = useParams();


  const movie = movies.find((m) => m.title === title);

  if (!movie) return <p>Film introuvable.</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>

      <div style={{ margin: '20px 0' }}>
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          title="YouTube trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <Link to="/">← Retour à l'accueil</Link>
    </div>
  );
}

export default MovieDescription;