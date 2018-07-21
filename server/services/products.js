module.exports = db => {

  const getAllProducts = () =>
    db.query(`SELECT * 
             FROM products`);

  const getProduct = (id) =>
    db.query(`SELECT *
              FROM products
              WHERE id = ?`, [id]);

  return {
    getAllProducts,
    getProduct
  }
};