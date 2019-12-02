import UsersService from '../services/users';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
const requestLogin = () => ({
  type: LOGIN_REQUEST
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const loginSuccess = (token, user) => ({
  type: LOGIN_SUCCESS,
  token,
  user
});

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
const loginFailure = (errorMessage) => ({
  type: LOGIN_FAILURE,
  errorMessage
});

export const login = (email, password) => (dispatch) => {
  dispatch(requestLogin());
  return UsersService.login(email, password)
    .then(
      response => dispatch(loginSuccess(response.token, response.user)),
      error => {
        console.log(error);
        return dispatch(loginFailure(error))
      }
    );
};

export const LOGOUT = 'LOGOUT';
export const logout = () => {
  UsersService.logout();
  return {
    type: LOGOUT
  };
};