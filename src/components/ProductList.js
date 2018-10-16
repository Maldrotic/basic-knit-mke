import React from 'react';
import ProductSquare from './ProductSquare';
import {Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const ProductList = (props = {
  productType: 'Product Type',
  products: []
}) => (
    <Row className='product-list' id={props.productType}>
      <Col sm={2} className='product-list--description'>
        <h4 className='product-list--description__name'><strong>{props.productType}</strong></h4>
        <hr/>
      </Col>
      <Col sm={9} className='product-list--products'>
        {
          props.products.map(product => (
            <ProductSquare product={product} key={product.id} />
          ))
        }
      </Col>
    </Row>
);

export default ProductList;