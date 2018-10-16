import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar bg='light' variant='light' expand='md' fixed='top'>
        <Navbar.Brand href='#'>
          Northern Fray
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="">
            Home
          </Nav.Link>
          <Nav.Link href="products">
            Products
          </Nav.Link>
          <Nav.Link href="admin">
            Admin
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default Header;