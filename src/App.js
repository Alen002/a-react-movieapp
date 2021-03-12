import React, {useEffect, useState} from 'react';
import Movie from './components/Movie';
import uuid from 'uuid';
import env from 'dotenv';

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





const App = () => {
/*   const movies =['1', '2', '3']; */
/*   useEffect(() => {console.log('USEEFFECT FIRED')}, []);  */
  const [movies, setMovies] = useState([]); // by default we will have an empty array which will be later filled with the fetched API data

  
  /*   
  const fetching = async () => {
    let array = [];
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1');
    const moviesResponse = await response.json();
    console.log(moviesResponse);
  } */


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
 
  const asyncFunction = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1`);
    const moviesResponse = await response.json();
    console.log(moviesResponse);
    setMovies(moviesResponse.results);
  }

  useEffect(() => asyncFunction(), [])  

  return (
    <div>
      <h1>MovieApp</h1> 
      {movies.map(e => {
        return(
          <>
            <p>{e.original_title}</p>
          </>
        )
      })}
     
    </div>
  );
}

export default App;
