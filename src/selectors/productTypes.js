export const getPossibleParentProductTypes = (productTypes = []) => {
  return productTypes.filter(productType => productType.parentId === null);
};