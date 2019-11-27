import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { randomInteger } from "../default";
import { bannerMovies } from '../constants'

class BannerMovies extends React.Component {
  state = {
    movie: {},
    bannerMovies: bannerMovies
  }

  componentDidMount() {
    const { movies } = this.props;
    let currentBanner

    if(movies.length){
      currentBanner = randomInteger(0, this.props.movies.length - 1);
      this.setState({
        movie: this.props.movies.find((item, i) => i === currentBanner)
      });
    }
  }

  render() {
    const { movie, bannerMovies } = this.state;
    

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
  };
}

const mapStateToProps = (state) =>  ({
  movies: state.moviesReducer.movies
});

export const BannerMoviesContainer = connect( mapStateToProps )(BannerMovies);