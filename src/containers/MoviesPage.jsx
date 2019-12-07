import React, { useState } from 'react';
import { connect } from 'react-redux';

import { AllMovies, FilterMovies } from "../components";

const MoviesPage = ({ movies }) => {
  const [currentMovies, setMovies] = useState(movies);
  
  const hendleFilter = () => {
    const filter = document.querySelectorAll('.filter-block input:not(.not-filter):checked');
    const arrayFilterOption = [];
    filter.forEach((elem) => {
      arrayFilterOption.push({
        name: elem.name,
        value: elem.value
      })
    });
    const newMovie = movies.filter( (item) => {
      const filterElements = [];
      arrayFilterOption.forEach((elem) => {
        let editedArray = [];
        item[elem.name].forEach(current => {
          editedArray.push(current.toLowerCase().trim());
        })
        filterElements.push(editedArray.includes(elem.value));
      })
      return (
        filterElements.every(elem => elem)
      )
    });
    setMovies(newMovie);
  }

  return (
    <div className="page-holder">
      <div className="container">
        <h1 className="section-title"><span>Все фильмы:</span></h1>
        <div className="movie-section">
          <FilterMovies movies={movies} hendleParentFilter={hendleFilter}/>
          <AllMovies movies={currentMovies} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: state.moviesReducer.movies
});

export const MoviesPageContainer = connect(
  mapStateToProps
)(MoviesPage);