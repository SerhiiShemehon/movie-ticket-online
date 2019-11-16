import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { store } from './store';
import { Main } from "./routs/";

import './scss/style.scss';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history ={history}>
      <Main></Main>
    </Router>
  </Provider>,
  document.getElementById('root')
);
