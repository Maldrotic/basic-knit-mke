const asyncHandler = require('../util/asyncHandler');
const validateAuthToken = require('../middleware/validateAuthToken');

module.exports = (db) => {

  const usersService = require('../services/users')(db);

  const express = require('express');
  const router = express.Router();

  router.post('/', validateAuthToken, asyncHandler(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const userTypeId = req.body.user_type_id;

    const result = await usersService.create({email, password, userTypeId});

    if (result) {
      return res.status(201).send(result);
    }
  }));

  router.get('/', validateAuthToken, asyncHandler(async (req, res) => {
    const email = req.query.email;
    const results = await usersService.getByEmail(email);

    if (results.length !== 1) {
      return res.status(404).send({
        error_message: 'User not found'
      });
    }

    const user = results[0];
    return res.status(200).json({
      user
    });
  }));

  return router;
};