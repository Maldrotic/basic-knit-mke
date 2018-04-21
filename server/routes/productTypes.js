module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/', (req, res) => {
    const sql = `SELECT *
                 FROM product_types`;
    db.query(sql)
      .then(rows => res.status(200).json({product_types: rows}))
      .catch(error => {
        return res.status(500).send({
          error: error,
          error_message: 'Error getting products types'
        });
      });
  });

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

  // router.update('/:id', (req, res) => {
  //   const productTypeId = req.params.id
  //
  // });

  router.get('/:id', (req, res) => {
    const id = req.params.id;

    const sql = `SELECT *
                 FROM product_types
                 WHERE id = ?`;
    const args = [id];
    db.query(sql, args)
      .then(rows => {
        const result = rows.length > 0 ? rows[0] : {};
        return res.json(result);
      })
      .catch(reason => sendSQLError(res, reason));
  });

  return router;
};