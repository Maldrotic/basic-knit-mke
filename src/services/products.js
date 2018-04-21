const getAll = () => {
  const requestOptions = {
    method: 'get'
  };
  return fetch('/api/products', requestOptions)
    .then(res => res.json())
    .then(res => {
      if (!res.products) {
        return Promise.reject(res.error_message);
      }
      return res.products;
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

export const productsService = {
  getAll,
  get
};