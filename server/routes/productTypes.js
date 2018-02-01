module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/', (req, res) => {
    const sql = `SELECT *
                 FROM product_types`;
    db.query(sql)
      .then(rows => res.json(rows))
      .catch(reason => res.status(500).send(`SQL Error: ${reason}`));
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
      .catch(reason => res.status(500).send(`SQL Error: ${reason}`));
  });

  router.post('')

  return router;
};