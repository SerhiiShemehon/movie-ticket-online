import React from 'react';

import { Link } from "react-router-dom";

import { BannerMoviesContainer } from "../../containers/BannerMovies";
import { ListNewsContainer } from "../../containers/ListNews";
import { ListMoviesContainer } from "../../containers/ListMovies";

export const HomePage = () => {
  return (
    <React.Fragment>
      <BannerMoviesContainer></BannerMoviesContainer>
      <div className="container">
        <div className="section-holder">
          <h2 className="section-title"><span>Now coming</span> <Link to="/movies/" className="btn btn-green">More</Link></h2>
          <ListMoviesContainer quantityMovies="4"></ListMoviesContainer>
        </div>
        <div className="section-holder">
          <h2 className="section-title"><span>News</span></h2>
          <ListNewsContainer></ListNewsContainer>
        </div>
      </div>
    </React.Fragment>
  );
}