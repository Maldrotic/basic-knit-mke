import React from 'react';
import {Route} from 'react-router-dom';
import ProductTypesPage from './ProductTypesPage';
import Header from './Header';
import ProductTypePage from './ProductTypePage';
import AdminProductPage from './AdminProductPage';
import {Grid} from 'react-bootstrap';

const AdminPage = ({match}) => (
  <div className='admin'>
    <Header />
    <Grid>
      <h1>Welcome to the Basic Knit Admin!</h1>
      <Route path={`${match.url}/product_types`} component={ProductTypesPage} exact={true}/>
      <Route path={`${match.url}/product_types/:id`} component={ProductTypePage}/>
      {/*<Route path={`${match.url}/products`} component={AdminProductsPage} exact={true} />*/}
      <Route path={`${match.url}/products/:id`} component={AdminProductPage} />
    </Grid>
  </div>
);

export default AdminPage;