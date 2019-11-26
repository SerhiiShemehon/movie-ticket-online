import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { store } from './store';
import { MainContainer } from "./routs/";

import './scss/style.scss';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history ={history}>
      <MainContainer></MainContainer>
    </Router>
  </Provider>,
  document.getElementById('root')
);
