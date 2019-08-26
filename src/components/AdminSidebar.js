import React from 'react';
import {Link} from 'react-router-dom';

const AdminSidebar = () => (
  <div className='admin-sidebar'>
    <div className='admin-sidebar__container admin-sidebar__container--top'>
      <div className='admin-sidebar__item admin-sidebar__item--title admin-sidebar__item--link'>
        <Link to='/admin'>Norther Fray Admin</Link>
      </div>
    </div>
    <div className='admin-sidebar__container admin-sidebar__container--middle--static'>
      <div className='admin-sidebar__item admin-sidebar__item--user'>
        <hr/>
        Welcome, user!
        <hr/>
      </div>
    </div>
    <div className='admin-sidebar__container admin-sidebar__container--middle--grow'>
      <div className='admin-sidebar__item admin-sidebar__item--link'>
        <Link to='/admin/product_types'>Product Types</Link>
      </div>
    </div>
    <div className='admin-sidebar__container admin-sidebar__container--bottom'>

    </div>
  </div>
);

export default AdminSidebar;