import React, {useEffect} from 'react';

import { Link } from "react-router-dom";

import { BannerMoviesContainer, ListMoviesContainer } from "../../containers";
import { ListNews } from "../";

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <BannerMoviesContainer />
      <div className="container">
        <div className="section-holder">
          <h2 className="section-title"><span>Сейчас идет</span> <Link to="/movies" className="btn btn-green">Больше</Link></h2>
          <ListMoviesContainer quantityMovies="4" />
        </div>
        <div className="section-holder">
          <h2 className="section-title"><span>Новости кино</span><Link to="/news" className="btn btn-green">Больше</Link></h2>
          <ListNews />
        </div>
      </div>
    </React.Fragment>
  );
}