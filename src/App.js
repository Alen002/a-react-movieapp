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
  const [searchTerm, setSearchTerm] = useState('');

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

  // HANDLEONSUBMIT
  const handleOnSubmit = (e) => {
    e.preventDefault(); // avoid submitting the form and refreshing the page
    if(searchTerm) {
      const searchAPI = async () => {
        /* const response = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1`); */
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=` + searchTerm);
        const moviesResponse = await response.json();
        console.log(moviesResponse);
        /* setMovies(moviesResponse.results); */
        setMovies(moviesResponse.results);
      }
      searchAPI();
    } else {
      asyncFunction();
    }
  }

  // HANDLEONCHANGE
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }


  // USEEFFECT
  useEffect(() => asyncFunction(), [])  

  return (
    // <> react fragments
    <> 
      <h1>MovieApp</h1> 
      <header>
        <form onSubmit={handleOnSubmit}>
          <input 
            className='search' 
            type="text" 
            placeholder='Search Movie'
            value={searchTerm} // we need a state for the searchTerm in oder to rerender the page after the search input
            onChange={handleOnChange} // whenever we enter something the event is immediately fired
          />
        </form>  
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
