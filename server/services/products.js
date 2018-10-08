module.exports = db => {

  /**
   * Get all products.
   *
   * @returns {Promise} Promise that resolves to a list of products
   */
  const getAll = () =>
    db.query(`SELECT * 
             FROM products`);

  /**
   * Get all products for a specific product type from the database.
   *
   * @param {int} productTypeId - the ID of the product type
   * @returns {Promise} Promise that resolves to a list of products
   */
  const getAllForProductType = (productTypeId) =>
    db.query(`SELECT *
              FROM products
              WHERE product_type_id = ?`, [productTypeId]);

  /**
   * Gets a product from the database.
   *
   * @param {int} id - the ID of the product
   * @returns {Promise} Promise that resolves to an array describing a product
   */
  const get = (id) =>
    db.query(`SELECT *
              FROM products
              WHERE id = ?`, [id]);

  /**
   * Inserts a new product into the database.
   *
   * @param {string} name - the name of the product
   * @param productTypeId - the ID of the product type for the product
   * @param thumbnailUrl - the url to the product's thumbnail
   * @returns {Promise}
   */
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