import React, {useEffect, useState} from 'react';
import Movie from './components/Movie';
import uuid from 'uuid';


const users = [
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },

];

// START OF APP COMPONENT
const App = () => {
  const [movies, setMovies] = useState([]); // by default we will have an empty array which will be later filled with the fetched API data

  // FETCHING WITH .THEN
  const fetching = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1`)
      .then(
        res => res.json()
      )
      .then(
        data => {
          console.log(data)
          setMovies(data.results)
      });
  };
  // ASYNC 
  const asyncFunction = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1`);
    const moviesResponse = await response.json();
    console.log(moviesResponse);
    setMovies(moviesResponse.results);
  }

  // USEEFFECT
  useEffect(() => asyncFunction(), [])  

  return (
    // <> react fragments
    <> 
      <h1>MovieApp</h1> 
      <header>
        <input className='search' type="text" placeholder='Search Movie'/>
      </header>
      <div className='movie-container'> 
        {movies.map(movie =>  // you can only loop through an array with map
        <Movie key={movie.id} {...movie} />  // ... is the spread operator, movie values are spread it we get all the props separately
        )}
      </div>
    </> 
    // </> end of react fragments
  );
}
// END OF APP COMPONENT

export default App;
