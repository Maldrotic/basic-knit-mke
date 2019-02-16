const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
  const header = req.headers['authorization'];

  if(typeof header !== 'undefined') {
    const bearer = header.split(' ');
    const token = bearer[1];

    req.token = token;
    jwt.verify(req.token, config['jwt-secret'], (err, authorizedData) => {
      if(err){
        //If error send Forbidden (403)
        console.log('ERROR: Could not connect to the protected route');
        res.sendStatus(403);
      } else {
        //If token is successfully verified, we can send the autorized data
        console.log('SUCCESS: Connected to protected route');
        console.log(authorizedData.user);
        next();
      }
    });
  } else {
    //If header is undefined return Forbidden (403)
    res.sendStatus(403)
  }
};