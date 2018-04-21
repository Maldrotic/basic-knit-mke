module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/', (req, res) => {
    const sql = `SELECT *
                 FROM products`;
    db.query(sql)
      .then(rows => res.status(200).json({products: rows}))
      .catch(error => {
        return res.status(500).send({
          error: error,
          error_message: 'Error getting products'
        });
      });
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT *
                 FROM products
                 WHERE id = ?`;
    db.query(sql, [id])
      .then(rows => {
        if (rows.length !== 1) {
          return res.status(404).json({
            error_message: 'Product not found'
          });
        }
        return res.status(200).json({product: rows[0]});
      })
      .catch(error => {
        return res.status(500).send({
          error: error,
          error_message: 'Error getting product'
        });
      });
  })

  // router.get('/:id', (req, res) => {
  //   pool.getConnection((err, connection) => {
  //     if (err) res.status(500).send('Error getting connection');
  //
  //     connection.query('SELECT * FROM products WHERE id = ?', [req.params['id']], (error, results) => {
  //       connection.release();
  //
  //       if (error) throw error;
  //
  //       res.json(results);
  //     })
  //   })
  // })

  return router;
};