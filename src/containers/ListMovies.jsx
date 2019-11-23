import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { getMovies } from "../actions/movies";

import loading from "../images/loading.gif";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class ListMovies extends React.Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { isLoading, movies, isError, quantityMovies } = this.props;

    const newMovies = movies.filter((item, i) => i < quantityMovies);

    return (
      <div className="box-list">
        {
          !isError
            ? !isLoading && newMovies
              ? newMovies.map((item, i) => (
                <div className="box-item" key={i}>
                  <Link to={`/movies/${item._id}`}>
                    <div className="img-holder">
                      <img src={item.poster} alt={item.title} />
                    </div>
                    <h3>{item.title}</h3>
                  </Link>
                </div>
              ))
              : <div className="loading-holder">
                  <span className="loading"><img src={loading} alt="loading" /></span>
                </div>
            : history.push('/error/')
        }
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  isError: state.moviesReducer.isError,
  isLoading: state.moviesReducer.isLoading,
  movies: state.moviesReducer.movies
});

const mapDispatchToProps = {
  getMovies
};

export const ListMoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMovies);