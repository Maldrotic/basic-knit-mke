import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StickyHomePage from '../components/HomePage';
// import NotFoundPage from '../components/NotFoundPage';
// import AdminPage from '../components/AdminPage';
// import ProductPage from '../components/ProductPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={StickyHomePage} exact={true} />
        {/*<Route path="/products/:id" component={ProductPage} exact={true} />*/}
        {/*<Route path="/admin" component={AdminPage} />*/}
        {/*<Route component={NotFoundPage} />*/}
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;