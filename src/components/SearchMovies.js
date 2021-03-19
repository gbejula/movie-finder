import React, { useState } from 'react';
import MovieCard from './MovieCard';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (event) => {
    event.preventDefault();
    console.log('submitting...');

    const url = `https://api.themoviedb.org/3/search/movie?api_key=85148a8b3b0c00853b0264638261d76e&language=en-US&query=${query}&inlcude_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className='form' onSubmit={searchMovies}>
        <label className='label' htmlFor='query'>
          Movie Name :
        </label>
        <input
          className='input'
          type='text'
          name='query'
          placeholder='i.e. Avengers'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button className='button' type='submit'>
          Search
        </button>
      </form>
      <div className='card--list'>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
};

export default SearchMovies;
