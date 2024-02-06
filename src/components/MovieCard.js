import {Link} from 'react-router-dom';

function MovieCard({title, time, genres, id}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <p>
          <Link to={`/movie/${id}`}>View Movie </Link>
        </p>
    </article>
  );
};

export default MovieCard;