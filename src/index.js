import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";

import { store, history } from './store';
import { PageContainer } from "./routes";

import './scss/style.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history ={history}>
      <PageContainer />
    </Router>
  </Provider>,
  document.getElementById('root')
);
