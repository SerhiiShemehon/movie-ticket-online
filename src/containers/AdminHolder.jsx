import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { updMovies } from "../actions";
import { NewMovieForm, AdminMovieItem } from "../components";

const AdminHolder = ({ movies, updMovies }) => {
  const [currentMovies, setMovies] = useState(movies);
  const [addMovie, setAddMovie] = useState(false); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAdd = () => {
    setAddMovie(!addMovie);
  };

  const handleRemove = (id) => {
    const newMovie = currentMovies.filter((item) => item._id !== id);
    setMovies([...newMovie]);
    updMovies([...newMovie]);
  };

  const updMoviesList = (newMovie) => {
    setMovies([...currentMovies, newMovie]);
    updMovies([...currentMovies, newMovie]);
  };

  return (
    <div className="page-holder">
      <div className="container">
        <h1 className="section-title"><span>Панель администратора</span></h1>
        <h3>{`Фильмов в прокате: ${currentMovies.length}`}</h3>
        <div className="movie-list">
          {currentMovies.map((item, i) => (
            <AdminMovieItem 
              key={i} 
              title={item.title} 
              poster={item.poster} 
              id={item._id} 
              handleRemove={handleRemove} 
            />
          ))
          }
        </div>
        <div className="text-center">
          <button 
            className="btn" 
            onClick={handleAdd}
          >
            Добавить новый фильм
          </button>
        </div>
        {addMovie && <NewMovieForm 
          setAddMovie={handleAdd} 
          updMoviesList={updMoviesList} 
        />}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: state.moviesReducer.movies
});

const mapDispatchToProps = {
  updMovies
};

export const AdminHolderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminHolder);