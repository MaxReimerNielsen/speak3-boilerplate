import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './Routes';
import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import reducers from './Reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router
      history={browserHistory}
      onUpdate={() => window.scrollTo(0, 0)}
    >
      {Routes}
    </Router>
  </Provider>
, document.getElementById('app'));
