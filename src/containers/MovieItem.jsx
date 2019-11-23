import React from 'react';
import { connect } from 'react-redux';

import { getMovieItem } from "../actions/movieItem";

import loading from "../images/loading.gif";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class MovieItem extends React.Component {
  
  componentDidMount() {
    this.props.getMovieItem(this.props.match.params.id);
  }

  render() {
    const { isLoading, movie, isError } = this.props;

    return (
      <div className="movie-page">
        <div className="container">
          {
            !isError
              ? !isLoading && movie
                ? <div className="movie-holder">
                    <h1 className="section-title"><span>{movie.title}</span></h1>
                    <div className="option-holder">
                      <div className="img-holder">
                        <img src={movie.poster} alt={movie.title}/>
                      </div>
                      <div className="text-holder">
                        <div className="option-list">
                          <span>Страна:</span>
                          <ul>
                            {Array.isArray(movie.country) ? movie.country.map((item, i) => (<li key={i}>{item}</li>)) : movie.country}
                          </ul>
                        </div>
                        <div className="option-list">
                          <span>Язык:</span>
                          <ul>
                            {Array.isArray(movie.language) ? movie.language.map((item, i) => (<li key={i}>{item}</li>)) : movie.language}
                          </ul>
                        </div>
                        <div className="option-list">
                          <span>Жанр:</span>
                          <ul>
                            {Array.isArray(movie.genre) ? movie.genre.map((item, i) => (<li key={i}>{item}</li>)) : movie.genre}
                          </ul>
                        </div>
                        <div className="option-list">
                          <span>Возраст:</span>
                          <ul>
                            {Array.isArray(movie.age) ? movie.age.map((item, i) => (<li key={i}>{item}</li>)) : movie.age}
                          </ul>
                        </div>
                        <div className="option-list">
                          <span>Время:</span>
                          <ul>
                            {Array.isArray(movie.long) ? movie.long.map((item, i) => (<li key={i}>{item}</li>)) : movie.long}
                          </ul>
                        </div>
                        <div className="option-list">
                          <span>В ролях актеры:</span>
                          <ul>
                            {Array.isArray(movie.actors) ? movie.actors.map((item, i) => (<li key={i}>{item}</li>)) : movie.actors}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="description-holder">
                      <h2>{movie.title}</h2>
                      <p>{movie.description}</p>
                    </div>
                  </div>
                : <div className="loading-holder">
                  <span className="loading"><img src={loading} alt="loading" /></span>
                </div>
              : history.push('/error/')
          }
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  isError: state.movieItemReducer.isError,
  isLoading: state.movieItemReducer.isLoading,
  movie: state.movieItemReducer.movie
});

const mapDispatchToProps = {
  getMovieItem
};

export const MovieItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieItem);