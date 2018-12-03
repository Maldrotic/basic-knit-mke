import React from 'react';
import AdminPageTitle from './AdminPageTitle';

class AdminHomePage extends React.Component {

  render() {
    return (
      <div className='admin-home admin__container'>
        <AdminPageTitle>Admin Home!</AdminPageTitle>
      </div>
    );
  }

}

export default AdminHomePage;