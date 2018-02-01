module.exports = (pool) => {
  const express = require('express');
  const router = express.Router();

  const productTypesRouter = require('./productTypes.js');

  router.get('/test', (req, res) => {
    return res.json({
      items: [
        '1',
        '2',
        '3'
      ]
    });
  });

  router.use('/product_types', productTypesRouter(pool));

  return router;
};