/** reducers/auth.js **/
import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from '../actions/auth';
import User from '../models/user';
let userJson = JSON.parse(localStorage.getItem('user'));
let user = userJson && User.fromObject(userJson);
let token = JSON.parse(localStorage.getItem('token'));
let authenticated = JSON.parse(localStorage.getItem('authenticated'));

const baseState = {
  user: user ? user : null,
  token: token ? token : null,
  authenticated: !!authenticated,
  errorMessage: null,
  isLoggingIn: false
};

const authReducer = (state = baseState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        errorMessage: null,
        isLoggingIn: true,
        user: null,
        authenticated: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        user: action.user,
        token: action.token,
        authenticated: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.errorMessage,
        isLoggingIn: false
      };
    case LOGOUT:
      return {
        user: null,
        token: null,
        authenticated: false
      };
    default:
      return state;
  }
};

export default authReducer;