import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { randomInteger } from "../default";
import { bannerMovies } from '../constants'

const BannerMovies = (props) => {
  const { movies } = props;
  let currentBanner, movie;

  if(movies.length){
    currentBanner = randomInteger(0, props.movies.length - 1);
    movie = props.movies.find((item, i) => i === currentBanner);
  }

  return (
    <React.Fragment>
      { !!movie
        ? <div className="section-banner">
            <div className="banner-holder" style={{ backgroundImage: `url(${bannerMovies[movie._id]})`}}>
            <h1>{movie.title}</h1>
            <Link to={`/movies/${movie._id}`} className="btn">To learn more</Link>
            </div>
          </div>
        : <div></div>
      }
    </React.Fragment >
  );
}

const mapStateToProps = (state) =>  ({
  movies: state.moviesReducer.movies
});

export const BannerMoviesContainer = connect( mapStateToProps )(BannerMovies);