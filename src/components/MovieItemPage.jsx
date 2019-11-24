import React from 'react';

import { MovieItemContainer } from "../containers/MovieItem";
import { SessionItemContainer } from "../containers/SessionItem";

export const MovieItemPage = (props) => {
  return (
    <div className="movie-page">
      <div className="container">
        <MovieItemContainer id={props.match.params.id}></MovieItemContainer>
        <SessionItemContainer id={props.match.params.id}></SessionItemContainer>
      </div>
    </div>
  )
}