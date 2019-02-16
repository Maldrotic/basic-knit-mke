const bcrypt = require('bcryptjs');
const asyncHandler = require('../util/asyncHandler');

module.exports = (db) => {
  const authService = require('../services/auth')(db);
  const usersService = require('../services/users')(db);

  const router = require('express').Router();

  router.post('/login', asyncHandler(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await usersService.getByEmail(email);
    if (user === null) {
      return res.status(404).send({error: 'User not found'});
    }

    const passwordIsValid = await bcrypt.compare(password, user.passwordHash);
    if (!passwordIsValid) {
      return res.status(401).send({error: 'Incorrect password'});
    }

    const token = authService.generateUserAuthToken(user);

    return res.status(200).send({
      user,
      token
    });
  }));

  router.post('/register', asyncHandler(async (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const passwordHash = await authService.generatePasswordHash(password);

    const user = usersService.insertUser({email, username, passwordHash});

    const token = authService.generateUserAuthToken(user);

    return res.status(200).send({auth: true, token: token});
  }));

  return router;
};