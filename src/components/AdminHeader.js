import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

const AdminHeader = () => (
  <Navbar bg='dark' variant='dark' fixed='top'>
    <Navbar.Brand href='admin'>
      Northern Fray
    </Navbar.Brand>
    <Nav>
      <Nav.Link href='admin/product_types'>
        Product Types
      </Nav.Link>
      <Nav.Link href='admin/products'>
        Products
      </Nav.Link>
    </Nav>
  </Navbar>
);

export default AdminHeader;