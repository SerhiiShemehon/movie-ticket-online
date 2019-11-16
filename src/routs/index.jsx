import React from 'react';
import { Route, Switch } from "react-router-dom";

import { HeaderContainer } from "../components/Header";
import { Footer } from "../components/Footer";

export const Main = () => {
  return (
    <div className="page-holder">
      <div id="wrapper">
        <HeaderContainer></HeaderContainer>
        <div id="main">
          <div className="container">
            <Switch>
              
            </Switch>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};