import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  MOVIES_DATA
} from "../constants";

import { randomInteger } from "../default";

const moviesData = (payload) => ({
  type: MOVIES_DATA,
  payload
});

const getMovies = (data) => {
  return (dispatch) => {
    dispatch(moviesData(data));
  };
}

const AdminHolder = ({ movies, getMovies }) => {
  const [currentMovies, setMovies] = useState(movies);
  const [addMovie, setAddMovie] = useState(false);

  const [titleValue, setTitleValue] = useState('');
  const [countryValue, setСountryValue] = useState('');
  const [genreValue, setGenrValue] = useState('');
  const [languageValue, setLanguageValue] = useState('');
  const [actorValue, setActorValue] = useState('');
  const [longValue, setLongValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [posterValue, setPosterValue] = useState('');
  const [trailerValue, setTrailerValue] = useState('');


  const hendleChangeTitle = (event) => {
    setTitleValue(event.target.value);
  };
  const hendleChangeСountry = (event) => {
    setСountryValue(event.target.value);
  };
  const hendleChangeGenre = (event) => {
    setGenrValue(event.target.value);
  };
  const hendleChangeLanguage = (event) => {
    setLanguageValue(event.target.value);
  };
  const hendleChangeActor = (event) => {
    setActorValue(event.target.value);
  };
  const hendleChangeLong = (event) => {
    setLongValue(event.target.value);
  };
  const hendleChangedDescription = (event) => {
    setDescriptionValue(event.target.value);
  };
  const hendleChangedPoster = (event) => {
    setPosterValue(event.target.value);
  };
  const hendleChangedTrailer = (event) => {
    setTrailerValue(event.target.value);
  };

  const handleAdd = () => {
    setAddMovie(true);
  }

  const addNewMovie = (event) => {
    event.preventDefault();
    const newMovie = {
      title: titleValue,
      country: countryValue.split(','),
      genre: genreValue.split(','),
      language: languageValue,
      actors: actorValue.split(','),
      long: longValue,
      description: descriptionValue,
      poster: posterValue,
      trailer: trailerValue,
      _id: randomInteger(1000, 9999)
    }
    setMovies([...currentMovies, newMovie]);
    getMovies([...currentMovies, newMovie]);

    setTitleValue('');
    setСountryValue('');
    setGenrValue('');
    setLanguageValue('');
    setActorValue('');
    setLongValue('');
    setDescriptionValue('');
    setPosterValue('');
    setTrailerValue('');
    setAddMovie(false);
  }


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRemove = (id) => {
    const newMovie = currentMovies.filter((item) => item._id !== id);
    setMovies([...newMovie]);
    getMovies([...newMovie]);
  }

  return (
    <div className="page-holder">
      <div className="container">
        <h1 className="section-title"><span>Панель администратора</span></h1>
        <h3>{`Фильмов в прокате: ${currentMovies.length}`}</h3>
        <div className="movie-list">
          {currentMovies.map((item, i) => (
            <div className="movie-item" key={i}>
              <button className="movie-remove" onClick={() => { handleRemove(item._id) }}>Remove</button>
              <div className="img-holder" style={{
                'backgroundImage': `url(${item.poster})`
              }}>
              </div>
              <h3>{item.title}</h3>
            </div>
          ))
          }
        </div>
        <div className="text-center">
          <button className="btn" onClick={handleAdd}>Добавить новый фильм</button>
        </div>
        {addMovie && <div className="add-holder">
          <form onSubmit={addNewMovie}>
            <div className="form-block">
              <label htmlFor="title">Названия:</label>
              <input required id="title" type="text" value={titleValue} onChange={hendleChangeTitle} />
            </div>
            <div className="form-block">
              <label htmlFor="country">Страна: <span>(если больше одного то введите через запятую)</span></label>
              <input required id="country" type="text" value={countryValue} onChange={hendleChangeСountry} />
            </div>
            <div className="form-block">
              <label htmlFor="language">Язык:</label>
              <input required id="language" type="text" value={languageValue} onChange={hendleChangeLanguage} />
            </div>
            <div className="form-block">
              <label htmlFor="genre">Жанр: <span>(если больше одного то введите через запятую)</span></label>
              <input required id="genre" type="text" value={genreValue} onChange={hendleChangeGenre} />
            </div>
            <div className="form-block">
              <label htmlFor="actor">Актеры: <span>(если больше одного то введите через запятую)</span></label>
              <input required id="actor" type="text" value={actorValue} onChange={hendleChangeActor} />
            </div>
            <div className="form-block">
              <label htmlFor="long">Длительность:</label>
              <input required id="long" type="text" value={longValue} onChange={hendleChangeLong} />
            </div>
            <div className="form-block">
              <label htmlFor="description">Описание:</label>
              <textarea required id="description" type="text" value={descriptionValue} onChange={hendleChangedDescription}></textarea>
            </div>
            <div className="form-block">
              <label htmlFor="poster">Постер:</label>
              <input required id="poster" type="url" value={posterValue} onChange={hendleChangedPoster} />
            </div>
            <div className="form-block">
              <label htmlFor="trailer">Трейлер:</label>
              <input required id="trailer" type="url" value={trailerValue} onChange={hendleChangedTrailer} />
            </div>
            <div className="text-center">
              <button className="btn" type="submit">Добавить</button>
            </div>
          </form>
        </div>}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: state.moviesReducer.movies
});

const mapDispatchToProps = {
  getMovies
};

export const AdminHolderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminHolder);