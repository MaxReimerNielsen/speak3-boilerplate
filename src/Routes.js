import React from 'react';
import { IndexRoute, Route } from 'react-router';

// Here we define all our pages.
import Master from './pages/Master';
import HomePage from './pages/Home';

const Routes = (
  <Route path="/" component={Master}>
    <IndexRoute component={HomePage} />
    <Route path="home" component={HomePage} />
  </Route>
);

export default Routes;
