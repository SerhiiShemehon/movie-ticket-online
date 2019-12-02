import React from 'react';
import { Link } from "react-router-dom";


import { MovieItemContainer, CinemaSchedulesContainer } from '../../containers';

export class MovieItemPage extends React.Component {
  render() {
    return (
      <div className="movie-page">
        <div className="container">
          <MovieItemContainer id={this.props.match.params.id} />  
          <CinemaSchedulesContainer id={this.props.match.params.id} />
          <div className="moovi-page-footer">
            <Link to='/movies' className="btn">back</Link>
          </div>
        </div>
      </div>
    );
  };
}
