import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { getMovies } from "../actions/movies";

import { randomInteger } from "../default";


class BannerMovies extends React.Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { isLoading, movies, isError } = this.props;

    const currentBanner = randomInteger(0, movies.length - 1);
    const movie = movies.find((item, i) => i === currentBanner);
    
    let title = '', poster = {}, country = [], genre = [], id = '';
    
    if (movie) {
      title = movie.title;
      poster = {backgroundImage: `url(${ movie.poster })`};
      id = movie._id;
      country = movie.country;
      genre = movie.genre;
    }

    return (
      <div className="section-banner">
        {
          !isError 
            ? !isLoading && movie 
              ? <div className="banner-holder" style={poster}>
                  <h1>{title}</h1>
                  <div className="option-list">
                    <h6>Страна:</h6>
                    <ul>
                      {country.map((item, i) => (<li key={i}>{item}</li>))}
                    </ul>
                  </div>
                  <div className="option-list">
                    <h6>Жанр:</h6>
                    <ul>
                      {genre.map((item, i) => (<li key={i}>{item}</li>))}
                    </ul>
                  </div>
                  <Link to={`/movies/${id}`} className="btn">Узнать больше</Link>
                </div>
              : <div className="loading-holder">
                  
                </div>
            : <div className="error-holder">

              </div>
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