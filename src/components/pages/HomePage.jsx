import React from 'react';

import { Link } from "react-router-dom";

import { BannerMoviesContainer } from "../../containers/BannerMovies";
import { ListMoviesContainer } from "../../containers/ListMovies";
import { ListNews } from "../../containers/ListNews";
import { ListPreview } from "../../containers/ListPreview";

export const HomePage = () => {
  return (
    <React.Fragment>
      <BannerMoviesContainer></BannerMoviesContainer>
      <div className="container">
        <div className="section-holder">
          <h2 className="section-title"><span>Сейчас идет</span> <Link to="/movies/">Больше</Link></h2>
          <ListMoviesContainer quantityMovies="8"></ListMoviesContainer>
        </div>
        <div className="section-holder">
          <h2 className="section-title"><span>Анонсы</span></h2>
          <ListPreview></ListPreview>
        </div>
        <div className="section-holder">
          <h2 className="section-title"><span>Немного новостей</span></h2>
          <ListNews></ListNews>
        </div>
      </div>
    </React.Fragment>
  );
}