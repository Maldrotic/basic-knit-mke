import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import AdminPage from '../components/AdminPage';
import ProductTypesPage from '../components/ProductTypesPage';
import EditProductTypePage from '../components/EditProductTypePage';
import AddProductTypePage from '../components/AddProductTypePage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/admin" component={AdminPage} exact={true}/>
        <Route path='/admin/product_types' component={ProductTypesPage} exact={true}/>
        <Route path='/admin/product_types/create' component={AddProductTypePage}/>
        <Route path='/admin/product_types/:id' component={EditProductTypePage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;