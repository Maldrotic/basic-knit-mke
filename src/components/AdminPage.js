import React from 'react';
import {Link, Route} from 'react-router-dom';
import ProductTypesPage from './ProductTypesPage';
import path from 'path';

const AdminPage = ({match}) => (
  <div>
    <h1>Admin</h1>
    <Link to={path.join(match.url, 'product_types')}>Product Types</Link>

    <Route path={`${match.url}/product_types`} component={ProductTypesPage}/>
  </div>
);

export default AdminPage;