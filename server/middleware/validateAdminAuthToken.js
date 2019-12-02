const jwt = require('jsonwebtoken');
const config = require('../config');
const userModel = require('../models/user');

module.exports = (req, res, next) => {
  const header = req.headers['authorization'];

  if(typeof header !== 'undefined') {
    const bearer = header.split(' ');
    req.token = bearer[1];
    jwt.verify(req.token, config['jwt-secret'], (err, authorizedData) => {
      if (err){
        return res.sendStatus(403);
      } else {
        if (authorizedData.user.userTypeId !== userModel.ADMIN_ROLE_ID) {
          return res.sendStatus(403);
        }
        next();
      }
    });
  } else {
    //If header is undefined return Forbidden (403)
    res.sendStatus(403)
  }
};