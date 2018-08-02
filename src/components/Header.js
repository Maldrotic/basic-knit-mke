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
      <NavItem componentClass={Link}
               eventKey={1}
               href="/admmin/product_types"
               to="/admin/product_types" >
        Product Types
      </NavItem>
      <NavItem componentClass={Link}
               eventKey={2}
               href="/admin/products"
               to="/admin/products" >
        Products
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;