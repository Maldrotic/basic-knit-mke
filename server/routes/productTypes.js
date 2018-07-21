const asyncHandler = require('../util/asyncHandler');

module.exports = (db) => {
  const productTypesService = require('../services/productTypes')(db);

  const express = require('express');
  const router = express.Router();

  router.get('/', asyncHandler(async (req, res) => {
    const productTypes = await productTypesService.getAll();
    return res.status(200).json(productTypes);
  }));

  router.post('/', (req, res) => {
    const parentId = req.body.parentId;
    const name = req.body.name;

    if (!parentId || !name)
      res.status(400).send('Missing POST body arguments');

    const sql = `INSERT INTO product_types (parent_id, name)
                 VALUES (?, ?)`;
    const args = [parentId, name];
    db.query(sql, args)
      .then(rows => res.status(200).send('Successful insert'))
      .catch(reason => sendSQLError(res, reason));
  });

  router.get('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const results = await productTypesService.get(id);
    
    if (results.length !== 1) {
      return res.status(404).json({
        error_message: 'Product type not found'
      });
    }

    const productType = results[0];
    return res.status(200).json(productType);
  }));

  return router;
};