module.exports = db => {

  /**
   * Get all images for a product.
   *
   * @param {int} productId - the Id of the product
   * @returns {Promise} Promise that resolves to a list of product images
   */
  const getAllForProduct = (productId) =>
    db.query(`
      SELECT *
      FROM product_images
      WHERE product_id = ?
    `, [productId]);

  /**
   * Get a product image by its id.
   *
   * @param {int} id - the id of the product image
   * @returns {Promise} Promise that resolves to an array describing a product image.
   */
  const get = (id) =>
    db.query(`
      SELECT *
      FROM product_images
      WHERE id = ?
    `, [id]);

  /**
   * Inserts a new product image into the database.
   *
   * @param {string} product_id - id of the associated product
   * @param {string} url - url to the image
   * @returns {Promise}
   */
  const create = ({product_id = '', url = ''} = {}) =>
    db.query(`
      INSERT INTO product_images (product_id, url)
      VALUES (?, ?)
    `, [product_id, url]);

  return {
    getAllForProduct,
    get,
    create
  };
};