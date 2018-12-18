module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const authRouter = require('./auth.js');
  const productsRouter = require('./products.js');
  const productTypesRouter = require('./productTypes.js');
  const usersRouter = require('./users.js');

  router.use('/auth', authRouter(db));
  router.use('/products', productsRouter(db));
  router.use('/product_types', productTypesRouter(db));
  router.use('/users', usersRouter(db));

  return router;
};