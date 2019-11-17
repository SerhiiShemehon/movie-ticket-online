import React from 'react';
import { connect } from 'react-redux';

import { getBannerMovies } from "../actions/bannerMovies";


class BannerMovies extends React.Component {
  componentDidMount() {
    this.props.getBannerMovies();
  }

  render() {
    console.log(this.props);
    const { isLoading, movies, isError } = this.props;
    
    

    return (
      <div className="section-banner">
        {/* {
          isLoading 
            ? <div className="loading"></div> 
            : movies.map((item, i) => (
              <div key={i}>
                {item.title}
              </div>
            ))
        } */}
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  isError: state.isError,
  isLoading: state.isLoading,
  movies: state.movies
});

const mapDispatchToProps = {
  getBannerMovies
};

export const BannerMoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BannerMovies);