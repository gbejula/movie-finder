import React from 'react';
import './App.css';
import SearchMovies from './components/SearchMovies';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function App() {
  return (
    <div className='container'>
      <h1 className='title'>React Movie Search</h1>
      <SearchMovies />
      <div className='gotopbtn' onClick={scrollToTop}>
        <i className='fas fa-arrow-up'></i>
      </div>
    </div>
  );
}

export default App;
