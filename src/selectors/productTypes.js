export const selectBaseProductTypes = (productTypes = []) => {
  return productTypes.filter(productType => productType.parent_id === null);
};

export const selectProductType = (id, productTypes = []) => {
  return productTypes.find(productType => productType.id == id);
};

export const selectProductTypesChildren = (parentId, productTypes = []) => {
  return productTypes.filter(productType => productType.parent_id == parentId);
};