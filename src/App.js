import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './Routes';

ReactDOM.render(
  <Router
    history={browserHistory}
    onUpdate={() => window.scrollTo(0, 0)}
  >
    {Routes}
  </Router>
, document.getElementById('app'));
