import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import loading from "../images/loading.gif";

import { getMovies } from "../actions/movies";

import { randomInteger } from "../default";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();


class BannerMovies extends React.Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { isLoading, movies, isError } = this.props;

    const currentBanner = randomInteger(0, movies.length - 1);
    const movie = movies.find((item, i) => i === currentBanner);

    return (
      <div className="section-banner">
        {
          !isError 
            ? !isLoading && movie 
              ? <div className="banner-holder" style={{backgroundImage: `url(${movie.poster})`}}>
                  <h1>{movie.title}</h1>
                  <div className="option-list">
                    <h6>Страна:</h6>
                    <ul>
                      {movie.country.map((item, i) => (<li key={i}>{item}</li>))}
                    </ul>
                  </div>
                  <div className="option-list">
                    <h6>Жанр:</h6>
                    <ul>
                      {movie.genre.map((item, i) => (<li key={i}>{item}</li>))}
                    </ul>
                  </div>
                  <Link to={`/movies/${movie._id}`} className="btn">Узнать больше</Link>
                </div>
              : <div className="loading-holder">
                  <span className="loading"><img src={loading} alt="loading" /></span>
                </div>
            : history.push('/error/')
        }
      </div>
    );
  };
}

const mapStateToProps = (state) =>  ({
  isError: state.moviesReducer.isError,
  isLoading: state.moviesReducer.isLoading,
  movies: state.moviesReducer.movies
});

const mapDispatchToProps = {
  getMovies
};

export const BannerMoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BannerMovies);