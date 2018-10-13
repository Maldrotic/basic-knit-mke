import React from 'react';

const ProductName = (props = {
  product: {}
}) => {
  return (
    <p className='product__name'>{props.product.name}</p>
  )
};

export default ProductName;