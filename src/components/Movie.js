import React from 'react';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const Movie = ({title, poster_path, overview, vote_average, id}) => {   // or (props.data), we write {data} because we are destructuting props.data
  return (
    <>
      <div className='movie' id={id}>
          <img src={IMG_API + poster_path} alt={title} /> 
          <div className="movie-info">
            <h3>{title}</h3>
            <span>{vote_average}</span>  
          </div>

          <div className="movie-over">
            <h2>Overview:</h2>
            <p>{overview}</p>
          </div>

      </div>
    </>
  );
}

export default Movie; 
