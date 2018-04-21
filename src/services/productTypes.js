const getAll = () => {
  const requestOptions = {
    method: 'get'
  };

  return fetch('/api/product_types', requestOptions)
    .then(res => res.json())
    .then(res => {
      if (!res.product_types) {
        return Promise.reject(res.error_message);
      }
      return res.product_types
    });
};

const get = (productTypeId) => {
  const requestOptions = {
    method: 'get'
  };

  return fetch(`/api/product_types/${productTypeId}`, requestOptions)
    .then(res => res.json())
    .then(res => {
      if (!res.product_type) {
        return Promise.reject(res.error_message);
      }
      return res.product_type;
    });
};

export const productTypesService = {
  getAll,
  get
};