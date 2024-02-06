import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import NavBar from "../components/NavBar";

function Movie() {
  
  const [movie, setMovie] = useState({})
  const params = useParams()
  const movieId = params.id


  useEffect(() =>{
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(r => r.json())
    .then(data => setMovie(data))
    .catch(error => console.error(error));
  }, [movieId]);

  if(!movie.title){
    return <h1>Loading...</h1>;
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{`Runtime: ${movie.time} minutes`}</p>
        <p>Genres:</p>
        {movie.genres.map(genre => <span>{genre}<br/></span>)}
      </main>
    </>
  );
};

export default Movie;
