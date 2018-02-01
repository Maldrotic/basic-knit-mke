export const REQUEST_PRODUCT_TYPES = 'REQUEST_PRODUCT_TYPES';
const requestProductTypes = () => ({
  type: REQUEST_PRODUCT_TYPES
});

export const RECEIVE_PRODUCT_TYPES = 'RECEIVE_PRODUCT_TYPES';
const receiveProductTypes = (json) => ({
  type: RECEIVE_PRODUCT_TYPES,
  productTypes: json
});

export const fetchProductTypes = () => (dispatch) => {
  dispatch(requestProductTypes());
  return fetch('/api/product_types')
    .then(res => res.json())
    .then(json => dispatch(receiveProductTypes(json)));
};

export const EDIT_PRODUCT_TYPE = 'EDIT_PRODUCT_TYPE';
export const editProductType = () => ({
  type: EDIT_PRODUCT_TYPE
});

export const REMOVE_PRODUCT_TYPE = 'REMOVE_PRODUCT_TYPE';
export const removeProductType = () => ({
  type: REMOVE_PRODUCT_TYPE
});

