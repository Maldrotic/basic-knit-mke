import React from 'react';

const ProductDescription = (props = {
  product: {}
}) => {
  return (
    <div>{props.product.description}</div>
  );
};

export default ProductDescription;