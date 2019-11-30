import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import AdminPage from '../components/AdminPage';
import ProductPage from '../components/ProductPage';
import {PrivateRoute} from './PrivateRoute';

const style = {
  height: '100%',
  width: '100%'
};

const AppRouter = () => (
  <BrowserRouter>
    <div style={style}>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/products/:id" component={ProductPage} exact={true} />
        <Route path="/admin" component={AdminPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;