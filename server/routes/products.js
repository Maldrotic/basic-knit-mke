const asyncHandler = require('../util/asyncHandler');

module.exports = (db) => {
  const productsService = require('../services/products')(db);
  const productImagesService = require('../services/productImages')(db);

  const express = require('express');
  const router = express.Router();

  /**
   * Get all products.
   */
  router.get('/', asyncHandler(async (req, res) => {
    let products = await productsService.getAll();
    for (const product of products) {
      product.images = await productImagesService.getAllForProduct(product.id);
    }

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
    const price = req.body.price;
    const description = req.body.description;

    if (!name || !productTypeId)
      return res.status(400).send('Missing POST body arguments');

    const createProductResult = await productsService.create({name, productTypeId, price, description});
    const newProductId = createProductResult.insertId;

    return res.status(200).json({
      id: newProductId,
      name,
      price,
      description
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
    product.images = await productImagesService.getAllForProduct(product.id);
    return res.status(200).json({
      product
    });
  }));

  /**
   * Upload an image for a product.
   */
  router.post('/:id/images', asyncHandler(async (req, res) => {
    const id = req.params.id;
    return res.status(501);
  }));

  /**
   * Get images for a product.
   */
  router.get('/:id/images', asyncHandler(async (req, res) => {
    const id = req.params.id;
    return res.status(501);
  }));

  /**
   * Update the primary image id for a product.
   */
  router.put('/:id/images/primary_image_id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const primaryImageId = req.body.primaryImageId;
    return res.status(501);
  }));

  return router;
};