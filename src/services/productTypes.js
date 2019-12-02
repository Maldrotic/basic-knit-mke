
class ProductTypesService {

  /**
   * Get all ProductTypes
   *
   * @returns {Promise<*>} A promise that resolves to the list of all ProductTypes
   */
  static getAll = async () => {
    const requestOptions = {
      method: 'get'
    };

    const res = await fetch('/api/product_types', requestOptions);

    if (!res.ok) {
      throw new Error(`Error code ${res.status}: ${res.statusText}`);
    }

    const resJson = await res.json();
    if (resJson.error_message) {
      throw new Error(resJson.error_message);
    }

    return resJson.results;
  };

  /**
   * Gets a product type by ID.
   *
   * @param productTypeId {int} a product type ID
   * @returns {Promise<Response>} A promise that resolves to a product type
   */
  static get = (productTypeId) => {
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

  /**
   * Request to create a new product type
   *
   * @param parentId
   * @param name
   * @param authToken
   * @returns {Promise<any>}
   */
  static create = async ({parentId = 0, name = null} = {}, authToken) => {
    const requestOptions = {
      method: 'post',
      body: JSON.stringify({parentId, name}),
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      }
    };

    const response = await fetch('/api/product_types', requestOptions);
    if (!response.ok) {
      switch (response.status) {
        case 403:
          throw new Error(`Error creating product type: You are not authorized!`);
        default:
          throw new Error(`Error creating product type: ${response.status} - ${response.statusText}`);
      }
    }
    return await response.json();
  };

}

export default ProductTypesService;