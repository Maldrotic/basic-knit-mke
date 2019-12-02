class User {

  static ADMIN_ROLE_ID = 1;
  static CUSTOMER_ROLE_ID = 2;

  constructor(id, name, email, userTypeId) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._userTypeId = userTypeId;
  }

  static fromObject(user = {
    id: null,
    name: '',
    email: '',
    userTypeId: null
  }) {
    return new User(user.id, user.name, user.email, user.userTypeId);
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get userTypeId() {
    return this._userTypeId;
  }

  set userTypeId(value) {
    this._userTypeId = value;
  }

}

export default User;