const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = () => {

  const generatePasswordHash = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };

  const generateUserAuthToken = async (user) =>
    jwt.sign({id: user.id}, config['jwt-secret'], {expiresIn: 86400});


  return {
    generatePasswordHash,
    generateUserAuthToken
  };

};