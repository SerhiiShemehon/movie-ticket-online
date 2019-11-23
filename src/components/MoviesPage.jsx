import React from 'react';

import { ListMoviesContainer } from "../containers/ListMovies";

export class MoviesPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="page-holder">
          <h1 className="section-title"><span>Все фильмы:</span></h1>
          <ListMoviesContainer quantityMovies="100"></ListMoviesContainer>
        </div>
      </div>
    );
  }
}