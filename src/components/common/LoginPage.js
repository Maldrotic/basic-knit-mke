import React from 'react';
import LoginForm from './LoginForm';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';
import User from '../../models/user';

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
  }

  submit = values => {
    this.props.dispatch(login(values.email, values.password));
  };

  render() {
    if (this.props.authenticated && this.props.user && this.props.user.role === User.ADMIN_ROLE) {
      return <Redirect to='/admin' />;
    }

    if (this.props.authenticated) {
      return <Redirect to='/' />;
    }

    return (
      <div className='login-page'>
        <h1>Login</h1>
        {this.props.errorMessage && <p className='login-form__error-message'>{this.props.errorMessage}</p>}
        <LoginForm onSubmit={this.submit} />
        {this.props.isLoggingIn && <p>Logging in...</p>}
      </div>
    );
  }

}

const mapStateToProps = state => ({
  isLoggingIn: state.auth.isLoggingIn,
  authenticated: state.auth.authenticated,
  user: state.auth.user,
  errorMessage: state.auth.errorMessage
});

export default connect(mapStateToProps)(LoginPage);