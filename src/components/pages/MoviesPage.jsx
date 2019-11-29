import React from 'react';

import { ListMoviesContainer } from "../../containers/ListMovies";
import { FilterMoviesContainer } from "../../containers/FilterMovies";

export class MoviesPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="page-holder">
          <h1 className="section-title"><span>All Movies:</span></h1>
          <div className="movie-section">
            <FilterMoviesContainer />
            <ListMoviesContainer quantityMovies="100" />
          </div>
        </div>
      </div>
    );
  }
}