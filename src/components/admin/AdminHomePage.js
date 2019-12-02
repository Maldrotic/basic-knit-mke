import React from 'react';
import AdminPageTitle from './AdminPageTitle';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class AdminHomePage extends React.Component {

  render() {

    if (!this.props.authenticated) {
      return <Redirect to='/login' />;
    }

    return (
      <div className='admin-home admin__container'>
        <AdminPageTitle>Admin Home!</AdminPageTitle>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(AdminHomePage);