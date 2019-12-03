import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";


import { store } from './store';
import { MainContainer, history } from "./routs/";


import './scss/style.scss';



ReactDOM.render(
  <Provider store={store}>
    <Router history ={history}>
      <MainContainer></MainContainer>
    </Router>
  </Provider>,
  document.getElementById('root')
);
