import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {

  const [movies, setMovies] = useState([])

  useEffect(()=> {
    fetch("http://localhost:4000/movies")
    .then(res => res.json())
    .then(data => setMovies(data))
  }, [])

  return (
    <>
      <header>
        <h1>Home</h1>
        <NavBar />
      </header>
      <main>
        {
          movies.map(movie => (
          <MovieCard
            title={movie.title}
            time={movie.time}
            genres={movie.genres}
            id={movie.id}
            key={movie.id}
          />)
          )
        }
      </main>
    </>
  );
};

export default Home;
