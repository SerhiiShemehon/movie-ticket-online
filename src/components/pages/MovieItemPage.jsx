import React, { useEffect } from 'react';

import { MovieItemContainer, CinemaSchedulesContainer } from '../../containers';
import { history } from "../../store";

export const MovieItemPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="movie-page">
      <div className="container">
        <MovieItemContainer id={props.match.params.id} />  
        <CinemaSchedulesContainer id={props.match.params.id} />
        <div className="moovi-page-footer">
          <button className="btn" onClick={() => { history.goBack() }}>вернутся назад</button>
        </div>
      </div>
    </div>
  );
}
