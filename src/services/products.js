class ProductsService {

  /**
   * Get all Products from the API.
   *
   * @returns {Promise<any>}
   */
  static getAll = () => {
    const requestOptions = {
      method: 'get'
    };
    return fetch('/api/products', requestOptions)
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
   * Get all Products of a specific type.
   *
   * @param productTypeId the product type ID
   * @returns {Promise<any>}
   */
  static getAllForProductType = (productTypeId) => {
    const requestOptions = {
      method: 'get'
    };
    return fetch(`/api/product_types/${productTypeId}/products`, requestOptions)
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
   * Get a specific Product by ID.
   *
   * @param id the Product's ID
   * @returns {Promise<any>}
   */
  static get = (id) => {
    const requestOptions = {
      method: 'get'
    };
    return fetch(`/api/products/${id}`, requestOptions)
      .then(res => res.json())
      .then(res => {
        if (!res.product) {
          return Promise.reject(res.error_message);
        }
        return res.product;
      });
  };

  /**
   * Submit a request to the API to create a Product
   *
   * @param product Product model
   * @returns {Promise<any>}
   */
  static create = (product) => {
    const requestOptions = {
      method: 'post',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return fetch('/api/products', requestOptions)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Error code ${res.status}: ${res.statusText}`);
        }
        return res.json();
      });
  };

}

export default ProductsService;