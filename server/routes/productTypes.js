const asyncHandler = require('../util/asyncHandler');

module.exports = (db) => {
  const productTypesService = require('../services/productTypes')(db);
  const productsService = require('../services/products')(db);

  const express = require('express');
  const router = express.Router();

  /**
   * Get all product types.
   */
  router.get('/', asyncHandler(async (req, res) => {
    const productTypes = await productTypesService.getAll();
    return res.status(200).json({
      results: productTypes
    });
  }));

  /**
   * Create a new product type.
   */
  router.post('/', asyncHandler(async (req, res) => {
    let parentId = req.body.parentId;
    const name = req.body.name;

    if (!name)
      return res.status(400).send('Missing POST body arguments');

    if (parentId == 0) {
      parentId = undefined;
    }

    const createProductTypeResult = await productTypesService.create({parentId, name});
    const newProductTypeId = createProductTypeResult.insertId;

    return res.status(200).json({
      id: newProductTypeId,
      parent_id: parentId,
      name: name,
    });
  }));

  /**
   * Get a product type by id.
   */
  router.get('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const results = await productTypesService.get(id);
    
    if (results.length !== 1) {
      return res.status(404);
    }

    const productType = results[0];
    return res.status(200).json(productType);
  }));

  /**
   * Get all products for a product type.
   */
  router.get('/:id/products', asyncHandler(async (req, res) => {
    const productTypeId = req.params.id;
    const products = await productsService.getAllForProductType(productTypeId);

    return res.status(200).json({
      results: products
    });
  }));

  return router;
};