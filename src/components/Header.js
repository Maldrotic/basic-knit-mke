import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/admin'>Basic Knit MKE</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1}>
        <Link to='/admin/product_types'>Product Types</Link>
      </NavItem>
      <NavItem eventKey={2}>
        <Link to='/admin/products'>Products</Link>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;