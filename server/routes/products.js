module.exports = (pool) => {
  const express = require('express');
  const router = express.Router();

  router.get('/', (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) res.status(500).send('Error getting connection');

      connection.query('SELECT * FROM products', (error, results) => {
        connection.release();

        if (error) throw error;

        res.json({
          productTypes: results
        });
      });
    });
  });

  router.get('/:id', (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) res.status(500).send('Error getting connection');

      connection.query('SELECT * FROM products WHERE id = ?', [req.params['id']], (error, results) => {
        connection.release();

        if (error) throw error;

        res.json(results);
      })
    })
  })
};