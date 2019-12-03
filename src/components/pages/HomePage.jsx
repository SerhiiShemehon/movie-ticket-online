import React from 'react';

import { Link } from "react-router-dom";

import { BannerMoviesContainer, ListMoviesContainer } from "../../containers";
import { ListNews } from "../";

export const HomePage = () => {
  return (
    <React.Fragment>
      <BannerMoviesContainer />
      <div className="container">
        <div className="section-holder">
          <h2 className="section-title"><span>Now Coming</span> <Link to="/movies" className="btn btn-green">More</Link></h2>
          <ListMoviesContainer quantityMovies="4" />
        </div>
        <div className="section-holder">
          <h2 className="section-title"><span>News</span><Link to="/news" className="btn btn-green">More</Link></h2>
          <ListNews />
        </div>
      </div>
    </React.Fragment>
  );
}