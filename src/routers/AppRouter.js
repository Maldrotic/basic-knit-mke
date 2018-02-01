import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import AdminPage from '../components/AdminPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/admin" component={AdminPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;