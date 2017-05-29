import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/NotStudyPersonReducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import NotStudyPersonContainer from './containers/NotStudyPersonContainer';
import { dom } from './config';
import moment from 'moment';
moment.locale('ru');

import 'classlist-polyfill';
import 'babel-polyfill';
import './styles';

const middleware = [thunk, createLogger()];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <NotStudyPersonContainer />
  </Provider>,
  document.getElementById(dom.appId)
);