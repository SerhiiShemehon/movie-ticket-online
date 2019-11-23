import React from 'react';
import { Route, Switch } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomePage } from "../components/HomePage";
import { MoviesPage } from "../components/MoviesPage";
import { MovieItemContainer } from "../containers/MovieItem";
import { Page404 } from "../components/Page404";

export const Main = () => {
  return (
    <div className="layout-holder">
      <div id="wrapper">
        <Header></Header>
        <div id="main">
          <Switch>
            <Route path="/" component={HomePage} exact></Route>
            <Route path="/movies/" component={MoviesPage} exact></Route>
            <Route path="/movies/:id" component={MovieItemContainer} exact></Route>
            <Route path="/error/" component={Page404} exact></Route>
          </Switch>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};