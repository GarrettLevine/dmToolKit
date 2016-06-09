//**************************************************
//									I M P O R T   M O D U L E S
//**************************************************
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

//************************************************************************
//   C O M P O N E N T   I M P O R T S
//************************************************************************
import routes from './routes';
import configureStore from './store/configure-store';

const store = configureStore();

//**************************************************
//									R E N D E R
//**************************************************
ReactDOM.render(
  <Provider store={store} history={browserHistory}>
    <Router routes={routes} />
  </Provider>
  , document.querySelector('.main'));
