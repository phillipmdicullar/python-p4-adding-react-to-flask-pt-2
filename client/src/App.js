import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch('/movies')
    .then((res) => res.json())
    .then((movies) => {
      setMovies(movies);
      console.log(movies);
    })
    .catch((err) => {
      console.log(err);
    });
  },[]);
  return (
    <div className="App">
      <h1>Check the console for a list of movies!!</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;
