module.exports = db => {

  const getAll = () =>
    db.query(`SELECT *
              FROM product_types`);

  const get = id =>
    db.query(`SELECT *
              FROM product_types
              WHERE id = ?`, [id]);

  return {
    getAll,
    get
  }
};