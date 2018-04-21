import React from 'react';
import ProductSquare from './ProductSquare';
import {Col, Grid, Row} from 'react-bootstrap';

const ProductList = (props = {
  productType: 'Product Type',
  products: []
}) => (
    <Row className='product-list'>
      <Col sm={3} className='product-list--description'>
        <h4 className='product-list--description__name'>{props.productType}</h4>
        <hr/>
      </Col>
      <Col sm={9} className='product-list--products'>
        {
          props.products.map(product => (
            <ProductSquare product={product} key={product.id}/>
          ))
        }
      </Col>
    </Row>
);

export default ProductList;