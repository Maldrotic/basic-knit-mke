const asyncHandler = require('../util/asyncHandler');

module.exports = (db) => {
  const productsService = require('../services/products')(db);

  const express = require('express');
  const router = express.Router();

  /**
   * Get all products.
   */
  router.get('/', asyncHandler(async (req, res) => {
    const products = await productsService.getAll();
    return res.status(200).json({
      results: products
    });
  }));

  /**
   * Create a new product.
   */
  router.post('/', asyncHandler(async (req, res) => {
    const name = req.body.name;
    const productTypeId = req.body.productTypeId;
    const thumbnailUrl = req.body.thumbnailUrl;
    const photo = req.body.photo;

    if (!name || !productTypeId)
      return res.status(400).send('Missing POST body arguments');

    const createProductResult = await productsService.create({name, productTypeId, thumbnailUrl});
    const newProductId = createProductResult.insertId;

    return res.status(200).json({
      id: newProductId,
      name: name,
      thumbnail_url: thumbnailUrl
    });
  }));

  /**
   * Get a product.
   */
  router.get('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const results = await productsService.get(id);

    if (results.length !== 1) {
      return res.status(404).send({
        error_message: 'Product not found'
      });
    }

    const product = results[0];
    return res.status(200).json({
      product
    });
  }));

  return router;
};