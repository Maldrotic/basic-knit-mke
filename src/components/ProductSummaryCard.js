import React from 'react';
import Card from './Card';

const ProductSummaryCard = (props = {
  product: undefined
}) => (
  props.product &&
  <Card
    className='product-summary-card'
    id={`product-summary-card-${props.product.id}`}
  >
    <div className='product-summary-card__header'>
      {props.product.name}
      {props.product.id}
    </div>
    <div className='product-summary-card__content'>
    </div>
    <div className='product-summary-card__footer'>
    </div>
  </Card>
);

export default ProductSummaryCard;