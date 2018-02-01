export const REQUEST_PRODUCT_TYPES = 'REQUEST_PRODUCT_TYPES';
const requestProductTypes = () => ({
  type: REQUEST_PRODUCT_TYPES
});

export const RECEIVE_PRODUCT_TYPES = 'RECEIVE_PRODUCT_TYPES';
const receiveProductTypes = (json) => ({
  type: RECEIVE_PRODUCT_TYPES,
  productTypes: json.productTypes
});

export const fetchProductTypes = () => (dispatch) => {
  dispatch(requestProductTypes());
  return fetch('/api/product_types')
    .then(res => res.json())
    .then(json => dispatch(receiveProductTypes(json)));
};