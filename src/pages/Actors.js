import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { act } from "react-dom/test-utils";

function Actors() {

  const [actors, setActors] = useState([])

  useEffect(()=> {
    fetch("http://localhost:4000/actors")
      .then(res => res.json())
      .then(data => setActors(data))
  }, [])

  return (
    <>
      <header>
        <h1>Actors Page</h1>
        <NavBar />
      </header>
      <main>
        {
          actors.map(actor => (
            <article key={actor.id}>
              <h2>{actor.name}</h2>
              <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
              </ul>
            </article>
          ))
        }
      </main>
    </>
  );
};

export default Actors;
