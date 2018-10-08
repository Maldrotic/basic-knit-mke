module.exports = db => {

  /**
   * Gets all product types.
   *
   * @returns {Promise} A promise that resolves to an array of product types
   */
  const getAll = () =>
    db.query(`SELECT *
              FROM product_types`);

  /**
   * Gets a product type by ID.
   *
   * @param {int} id - a product type ID
   * @returns {Promise} a Promise that resolves to an array of product types with one product type.
   */
  const get = id =>
    db.query(`SELECT *
              FROM product_types
              WHERE id = ?`, [id]);

  /**
   * Adds a new product type.
   *
   * @param {number} parentId - the parent product type's id
   * @param {string} name - the name of the product type
   * @returns {Promise} a Promise that resolves to the id of the new product type
   */
  const create = ({parentId = undefined, name = undefined} = {}) =>
    db.query(`INSERT INTO product_types (parent_id, name)
              VALUES (?, ?)`, [parentId, name]);

  return {
    getAll,
    get,
    create
  }
};