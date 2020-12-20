import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Book from './components/Book/Book';

import Error404 from './components/Error/404';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/bookDetail" component={Book} exact />
      <Route component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
