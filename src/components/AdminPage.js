import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ProductTypesPage from './ProductTypesPage';
import Header from './Header';
import ProductTypePage from './ProductTypePage';
import AdminProductPage from './AdminProductPage';
import {Grid} from 'react-bootstrap';
import CreateProductTypePage from './CreateProductTypePage';
import CreateProductPage from '../CreateProductPage';

const AdminPage = ({match}) => (
  <div className='admin'>
    <Header />
    <Grid>
      <h1>Welcome to the Basic Knit Admin!</h1>
      <Switch>
        <Route path={`${match.url}/product_types`} component={ProductTypesPage} exact={true} />
        <Route path={`${match.url}/product_types/create`} component={CreateProductTypePage} exact={true} />
        <Route path={`${match.url}/product_types/:id`} component={ProductTypePage} exact={true} />
        {/*<Route path={`${match.url}/products`} component={AdminProductsPage} exact={true} />*/}
        <Route path={`${match.url}/products/:id`} component={AdminProductPage} exact={true} />
        <Route path={`${match.url}/product_types/:productTypeId/products/create`} component={CreateProductPage} exact={true} />
      </Switch>
    </Grid>
  </div>
);

export default AdminPage;