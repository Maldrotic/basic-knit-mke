const asyncHandler = require('../util/asyncHandler');

module.exports = (db) => {
  const productsService = require('../services/products')(db);

  const express = require('express');
  const router = express.Router();

  router.get('/', asyncHandler(async (req, res) => {
    const products = await productsService.getAllProducts();
    return res.status(200).json(products);
  }));

  router.get('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const results = await productsService.getProduct(id);

    if (results.length !== 1) {
      return res.status(404).send({
        error_message: 'Product not found'
      });
    }

    const product = results[0];
    return res.status(200).json(product);
  }));

  return router;
};