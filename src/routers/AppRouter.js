import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../components/common/HomePage';
import NotFoundPage from '../components/home/NotFoundPage';
import AdminPage from '../components/admin/AdminPage';
import ProductPage from '../components/home/ProductPage';
import {PrivateRoute} from './PrivateRoute';
import LoginPage from '../components/common/LoginPage';

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
        <Route path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;