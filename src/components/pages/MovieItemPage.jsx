import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


import { MovieItemContainer, CinemaSchedulesContainer } from '../../containers';

import { getSession } from "../../actions/session";

class MovieItemPage extends React.Component {
  componentDidMount(){
    this.props.getSession(this.props.match.params.id)
  };

  render() {
    return (
      <div className="movie-page">
        <div className="container">
          <MovieItemContainer id={this.props.match.params.id} />  
          <CinemaSchedulesContainer />
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