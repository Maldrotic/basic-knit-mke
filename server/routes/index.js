module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const productsRouter = require('./products.js');
  const productTypesRouter = require('./productTypes.js');

  router.use('/products', productsRouter(db));
  router.use('/product_types', productTypesRouter(db));

  return router;
};