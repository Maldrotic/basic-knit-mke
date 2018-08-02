/**
 * Gets all product types.
 *
 * @returns {Promise<Response>} A promise that resolves to an array of product types.
 */
const getAll = () => {
  const requestOptions = {
    method: 'get'
  };

  return fetch('/api/product_types', requestOptions)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Error code ${res.status}: ${res.statusText}`);
      }
      return res.json();
    })
    .then(res => {
      if (!res.results) {
        return Promise.reject(res.error_message);
      }
      return res.results;
    });
};

/**
 * Gets a product type by ID.
 *
 * @param productTypeId {int} a product type ID
 * @returns {Promise<Response>} A promise that resolves to a product type
 */
const get = (productTypeId) => {
  const requestOptions = {
    method: 'get'
  };

  return fetch(`/api/product_types/${productTypeId}`, requestOptions)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Error code ${res.status}: ${res.statusText}`);
      }
      return res.json();
    });
};

export const productTypesService = {
  getAll,
  get
};