const getAll = () => {
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

const getAllForProductType = (productTypeId) => {
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

const get = (id) => {
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

const create = ({productTypeId = 0, name = null, thumbnailUrl = null} = {}) => {
  const requestOptions = {
    method: 'post',
    body: JSON.stringify({productTypeId, name, thumbnailUrl}),
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

export const productsService = {
  getAll,
  getAllForProductType,
  get,
  create
};