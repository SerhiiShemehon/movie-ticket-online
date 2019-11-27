import React from 'react';

import { MovieItemContainer } from '../../containers/MovieItem'

export const MovieItemPage = (props) => {
  return (
    <div className="movie-page">
      <div className="container">
        <MovieItemContainer id={props.match.params.id}></MovieItemContainer>  
        
      </div>
    </div>
  )
}