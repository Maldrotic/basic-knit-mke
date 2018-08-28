module.exports = db => {

  const getAll = () =>
    db.query(`SELECT * 
             FROM products`);

  const getAllForProductType = (productTypeId) =>
    db.query(`SELECT *
              FROM products
              WHERE product_type_id = ?`, [productTypeId]);

  const get = (id) =>
    db.query(`SELECT *
              FROM products
              WHERE id = ?`, [id]);

  const create = ({name = '', productTypeId = '', thumbnailUrl = ''} = {}) =>
    db.query(`INSERT INTO products (name, product_type_id, thumbnail_url)
              VALUES (?, ?, ?)`, [name, productTypeId, thumbnailUrl]);

  return {
    getAll,
    getAllForProductType,
    get,
    create
  }
};