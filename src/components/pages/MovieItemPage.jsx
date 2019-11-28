import React from 'react';
import { connect } from 'react-redux';

import { MovieItemContainer } from '../../containers/MovieItem'
import { CinemaSchedulesContainer } from "../../containers/CinemaSchedules";

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