import User from '../models/user';

class UsersService {

  /**
   * Request an auth token using a username and password.
   * If valid login, set's auth info in local storage.
   *
   * @param email the User's email
   * @param password the User's password
   * @returns {Promise<any>}
   */
  static login = (email, password) => {
    const requestOptions = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    };

    return fetch('/api/auth/login', requestOptions)
      .then(res => res.json())
      .then(res => {
        if (!res.user) {
          return Promise.reject(res.error_message);
        }
        let user = User.fromObject(res.user);
        localStorage.setItem('token', JSON.stringify(res.token));
        localStorage.setItem('authenticated', JSON.stringify(true));
        localStorage.setItem('user', JSON.stringify(res.user));
        return {user: user, token: res.token};
      });
  };

  /**
   * Remove auth items from local storage
   */
  static logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('authenticated');
  };

}

export default UsersService;