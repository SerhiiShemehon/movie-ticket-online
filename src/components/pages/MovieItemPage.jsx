import React from 'react';

import { MovieItemContainer, CinemaSchedulesContainer } from '../../containers';
import { history } from "../../routs/";

export class MovieItemPage extends React.Component {
  render() {
    return (
      <div className="movie-page">
        <div className="container">
          <MovieItemContainer id={this.props.match.params.id} />  
          <CinemaSchedulesContainer id={this.props.match.params.id} />
          <div className="moovi-page-footer">
            <button className="btn" onClick={()=>{history.goBack()}}>go back</button>
          </div>
        </div>
      </div>
    );
  };
}
