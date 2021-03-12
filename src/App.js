import React from 'react';
import Movie from './components/Movie';

const App = () => {
  const movies =['1', '2', '3'];
  return (
    <div>
      <h1>MovieApp</h1>
      {movies.map(e => <p>{e}</p>)}
      <Movie />
    </div>
  );
}

export default App;
