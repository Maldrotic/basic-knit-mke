const bcrypt = require('bcrypt');
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
      return res.status(404).send({error_message: 'User not found'});
    }

    const passwordIsValid = await bcrypt.compare(password, user.passwordHash);
    if (!passwordIsValid) {
      return res.status(401).send({error_message: 'Incorrect password'});
    }

    const token = await authService.generateUserAuthToken(user);

    return res.status(200).send({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        userTypeId: user.userTypeId
      },
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