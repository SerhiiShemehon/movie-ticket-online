import React from 'react';
import { Route, Switch } from "react-router-dom";

import { HomePage, Page404, NewsPage, MovieItemPage, AdminPage } from "../components";
import { MoviesPageContainer, SchedulePageContainer, BayTicketPageContainer } from "../containers";

export const Main = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/movies" component={MoviesPageContainer} exact />
      <Route path="/schedule" component={SchedulePageContainer} exact />
      <Route path="/news" component={NewsPage} />
      <Route path="/movies/:id" component={MovieItemPage} exact />
      <Route path="/buy/:room/:movie/:session/:date" component={BayTicketPageContainer} exact />
      <Route path="/admin" component={AdminPage} exact />
      <Route path="*" component={Page404} />
    </Switch>
  );
}