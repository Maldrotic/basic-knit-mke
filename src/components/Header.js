import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Basic Knit</h1>
    <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>
    <NavLink to='/admin' activeClassName='is-active' exact={true}>Admin</NavLink>
  </header>
);

export default Header;