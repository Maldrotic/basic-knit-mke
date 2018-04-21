import React from 'react';
import HomePageHero from './HomePageHero';
import {connect} from 'react-redux';
import {fetchProductTypes} from '../actions/productTypes';
import ProductList from './ProductList';
import {selectBaseProductTypes} from '../selectors/productTypes';
import {fetchProducts} from '../actions/products';
import {Col, Grid, Row} from 'react-bootstrap';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProductTypes());
    this.props.dispatch(fetchProducts());
  }

  render() {
    return (
      <div className='home-page'>
        <HomePageHero/>
        <Grid>
          <Row className='product-list-container'>
            <Col md={10} mdOffset={1}>
              {
                this.props.productTypes.map((productType) => {
                  const products = this.props.products;
                  return <ProductList productType={productType.name} products={products.filter(product => product.product_type_id === productType.id)} key={productType.id}/>;
                }, this)
              }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  productTypes: selectBaseProductTypes(state.productTypes.productTypes)
});

export default connect(mapStateToProps)(HomePage);