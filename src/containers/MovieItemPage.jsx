import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


import { MovieItemContainer, CinemaSchedulesContainer } from './';

import { getSession } from "../actions";

class MovieItemPage extends React.Component {
  componentDidMount(){
    this.props.getSession(this.props.match.params.id);
  };

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

const mapDispatchToProps = {
  getSession
};

export const MovieItemPageContainer = connect(
  null,
  mapDispatchToProps
)(MovieItemPage);