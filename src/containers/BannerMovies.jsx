import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { randomInteger } from "../default";
import { bannerMovies } from '../constants'

const BannerMovies = ({ movies }) => {
  let currentBanner, movie;

  if(movies.length){
    currentBanner = randomInteger(0, movies.length - 1);
    movie = movies.find((item, i) => i === currentBanner);
  }

  return ( 
    !!movie && <div className="section-banner">
      <div className="banner-holder" style={{ 
        backgroundImage: `url(${bannerMovies[movie._id]})`
      }}>
        <h1>{movie.title}</h1>
        <Link to={`/movies/${movie._id}`} className="btn">узнать больше</Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) =>  ({
  movies: state.moviesReducer.movies
});

export const BannerMoviesContainer = connect( mapStateToProps )(BannerMovies);