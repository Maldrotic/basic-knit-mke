import React from 'react';

const ProductSummaryCard = (props = {
  product: undefined
}) => (
  props.product &&
  <div
    className='product-summary-card'
    id={`product-summary-card-${props.product.id}`}
    key={props.product.id}
  >
    <div className='card__header'>
      {props.product.name}
      {props.product.id}
    </div>
    <div className='card__content'>
    </div>
    <div className='card__footer'>
    </div>
  </div>
);

export default ProductSummaryCard;