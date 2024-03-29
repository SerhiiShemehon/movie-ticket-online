import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const ListMovies = ({ movies, quantityMovies }) => {
  const newMovies = movies.filter((item, i) => i < quantityMovies);

  return (
    <div className="box-list">
      { newMovies.map((item, i) => (
          <div className="box-item" key={i}>
            <Link to={`/movies/${item._id}`}>
              <div className="img-holder" style={{
                'backgroundImage': `url(${item.poster})`
              }}>
              </div>
              <h3>{item.title}</h3>
            </Link>
          </div>
        ))
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: state.moviesReducer.movies
});

export const ListMoviesContainer = connect(
  mapStateToProps
)(ListMovies);