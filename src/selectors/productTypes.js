import {selectProduct} from './products';

export const selectBaseProductTypes = (productTypes = []) => {
  return productTypes.filter(productType => productType.parent_id === null);
};

export const selectProductType = (id, productTypes = []) => {
  return productTypes.find(productType => productType.id == id);
};

export const selectProductTypesChildren = (parentId, productTypes = []) => {
  return productTypes.filter(productType => productType.parent_id == parentId);
};

export const selectProductTypeForProduct = (productId, products = [], productTypes = []) => {
  const product = selectProduct(productId, products);
  if (product) {
    return selectProductType(product.product_type_id, productTypes);
  }
  return undefined;
};