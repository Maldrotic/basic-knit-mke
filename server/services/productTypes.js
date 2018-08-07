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
   * @param id {int} a product type ID
   * @returns {Promise} a Promise that resolves to an array of product types with one product type.
   */
  const get = id =>
    db.query(`SELECT *
              FROM product_types
              WHERE id = ?`, [id]);

  /**
   * Adds a new product type.
   *
   * @param parentId {number} the parent product type's id
   * @param name {string} the name of the product type
   * @returns {Promise} a Promise that resolves to the id of the new product type
   */
  const add = ({parentId = undefined, name = undefined} = {}) => {
    console.log(parentId);
    console.log(name);
    return db.query(`INSERT INTO product_types (parent_id, name)
                     VALUES (?, ?)`, [parentId, name]);
  };

  return {
    getAll,
    get,
    add
  }
};