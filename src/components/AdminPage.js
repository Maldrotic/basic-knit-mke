import React from 'react';
import {Link, Route} from 'react-router-dom';
import ProductTypesPage from './ProductTypesPage';
import path from 'path';

const AdminPage = ({match}) => (
  <div>
    <h1>Admin</h1>
    <Link to={path.join(match.url, 'product_types')}>Product Types</Link>
  </div>
);

export default AdminPage;