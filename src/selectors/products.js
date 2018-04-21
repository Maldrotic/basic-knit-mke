export const selectProductsWithProductType = (productTypeId, products) => {
  return products.filter(product => product.product_type_id == productTypeId);
};

export const selectProduct = (productId, products) => {
  return products.find(product => product.id == productId);
};