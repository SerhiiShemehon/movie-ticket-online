import React from 'react';

export const AdminMovieItem = ({ id, poster, title, handleRemove}) => {
  return (
    <div className="movie-item">
      <button
        className="movie-remove"
        onClick={() => { handleRemove(id) }}
      >
        Remove
      </button>
      <div className="img-holder" style={{
        'backgroundImage': `url(${poster})`
      }}>
      </div>
      <h3>{title}</h3>
    </div>
  );
};