import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ProductTypesPage from './ProductTypesPage';
import AdminHomePage from './AdminHomePage';
import AdminSidebar from './AdminSidebar';
import CreateProductTypePage from './CreateProductTypePage';
// import ProductTypePage from './ProductTypePage';
// import AdminProductPage from './AdminProductPage';
// import CreateProductTypePage from './CreateProductTypePage';
// import CreateProductPage from './CreateProductPage';

const AdminPage = ({match}) => (
  <div className='admin'>
    <AdminSidebar />
    <Switch>
      <Route path={`${match.url}`} component={AdminHomePage} exact={true} />
      <Route path={`${match.url}/product_types`} component={ProductTypesPage} exact={true} />
      <Route path={`${match.url}/product_types/create`} component={CreateProductTypePage} exact={true} />
      {/*<Route path={`${match.url}/product_types/:id`} component={ProductTypePage} exact={true} />*/}
      {/*<Route path={`${match.url}/products`} component={AdminProductsPage} exact={true} />*/}
      {/*<Route path={`${match.url}/products/create`} component={CreateProductPage} exact={true} />*/}
      {/*<Route path={`${match.url}/products/:id`} component={AdminProductPage} exact={true} />*/}
      {/*<Route path={`${match.url}/product_types/:productTypeId/products/create`} component={CreateProductPage} exact={true} />*/}
    </Switch>
  </div>
);

export default AdminPage;