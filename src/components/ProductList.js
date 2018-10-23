import React from 'react';
import ProductSquare from './ProductSquare';

const ProductList = (props = {
  productType: 'Product Type',
  products: []
}) => (
    <div className='product-list' id={props.productType}>
      <div className='product-list__description'>
        <h4 className='product-list__description__name'><strong>{props.productType}</strong></h4>
        <hr/>
      </div>
      <div className='product-list__products'>
        {
          props.products.map(product => (
            <ProductSquare product={product} key={product.id} />
          ))
        }
      </div>
    </div>
);

export default ProductList;