import React from 'react';
import {Link} from 'react-router-dom';

const AdminHeader = () => (
  <div className='admin_header'>
    <div className='admin_header__container admin_header__container--left'>
      <div className='admin_header__item admin_header__item--title admin_header__item--link'>
        <Link to='/admin'>Northern Fray Admin</Link>
      </div>
      <div className='admin_header__item admin_header__item--link'>
        <Link to='/admin/product_types'>Product Types</Link>
      </div>
    </div>
    <div className='admin_header__container admin_header__container--center'>

    </div>
    <div className='admin_header__container admin_header__container--right'>
      <div className='admin_header__item'>
        Welcome, user!
      </div>
    </div>
  </div>
);

export default AdminHeader;