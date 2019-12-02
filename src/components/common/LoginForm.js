import React from 'react';
import {Field, reduxForm} from 'redux-form';

let LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <div className='login-form__email'>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="text" />
      </div>
      <div className='login-form__password'>
        <label htmlFor='password'>Password</label>
        <Field name='password' component='input' type='password' />
      </div>
      <button className='login-form__submit-button'>Login</button>
    </form>
  )
};

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;