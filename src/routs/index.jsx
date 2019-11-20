import React from 'react';
import { Route, Switch } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomePage } from "../components/HomePage";

export const Main = () => {
  return (
    <div className="page-holder">
      <div id="wrapper">
        <Header></Header>
        <div id="main">
          <Switch>
            <Route path="/" component={HomePage} exact></Route>
          </Switch>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};