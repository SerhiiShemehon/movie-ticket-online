import React from 'react';
import { Link } from "react-router-dom";

export const AllMovies = ({ movies }) => {

  return (
    <div className="box-list">
      { movies.length 
        ? movies.map((item, i) => (
          <div className="box-item" key={i}>
            <Link to={`/movies/${item._id}`}>
              <div className="img-holder" style={{
                'backgroundImage': `url(${item.poster})`
              }}>
              </div>
              <h3>{item.title}</h3>
            </Link>
          </div>
        ))
        : <h2 className="not-movie">Sorry, there is no movie by these parameters.</h2>
      }
    </div>
  );
}