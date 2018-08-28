const asyncHandler = require('../util/asyncHandler');

module.exports = (db) => {
  const productTypesService = require('../services/productTypes')(db);
  const productsService = require('../services/products')(db);

  const express = require('express');
  const router = express.Router();

  router.get('/', asyncHandler(async (req, res) => {
    const productTypes = await productTypesService.getAll();
    return res.status(200).json({
      results: productTypes
    });
  }));

  router.post('/', asyncHandler(async (req, res) => {
    const parentId = req.body.parentId;
    const name = req.body.name;

    if (!parentId || !name)
      return res.status(400).send('Missing POST body arguments');

    const createProductTypeResult = await productTypesService.create({parentId, name});
    const newProductTypeId = createProductTypeResult.insertId;

    return res.status(200).json({
      id: newProductTypeId,
      parent_id: parentId,
      name: name,
    });
  }));

  router.get('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const results = await productTypesService.get(id);
    
    if (results.length !== 1) {
      return res.status(404);
    }

    const productType = results[0];
    return res.status(200).json(productType);
  }));

  router.get('/:id/products', asyncHandler(async (req, res) => {
    const productTypeId = req.params.id;
    const products = await productsService.getAllForProductType(productTypeId);

    return res.status(200).json({
      results: products
    });
  }));

  return router;
};