import React from 'react';

const AdminHeader = () => (
  <div className='admin_header'>
    <div className='admin_header__container admin_header__container--left'>
      <div className='admin_header__item admin_header__item--title'>
        Northern Fray Admin
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