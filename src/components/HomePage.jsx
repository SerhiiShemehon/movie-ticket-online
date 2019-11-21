import React from 'react';

import { Link } from "react-router-dom";

import { BannerMoviesContainer } from "../containers/BannerMovies";
import { ListMoviesContainer } from "../containers/ListMovies";
import { ListNews } from "../containers/ListNews";

export const HomePage = () => {
  return (
    <React.Fragment>
      <BannerMoviesContainer></BannerMoviesContainer>
      <div className="container">
        <div className="section-holder">
          <h2 className="section-title"><span>Сейчас идет:</span> <Link to="/movies/">Больше</Link></h2>
          <ListMoviesContainer quantityMovies="4"></ListMoviesContainer>
        </div>
        <div className="section-holder">
          <h2 className="section-title"><span>Наши залы:</span> <Link to="/halls/">Больше</Link></h2>

        </div>
        <div className="section-holder">
          <h2 className="section-title"><span>Новости:</span> <Link to="/">Больше</Link></h2>
          <ListNews></ListNews>
        </div>
      </div>
    </React.Fragment>
  );
}