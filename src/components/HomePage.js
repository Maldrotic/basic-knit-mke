import React from 'react';
import HomePageHero from './HomePageHero';
import {connect} from 'react-redux';
import {fetchProductTypes} from '../actions/productTypes';
import ProductList from './ProductList';
import {selectBaseProductTypes} from '../selectors/productTypes';
import {fetchProducts} from '../actions/products';
import {Col, Container, Row} from 'react-bootstrap';
import Header from './Header';
import StickyHeader from './StickyHeader';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProductTypes());
    this.props.dispatch(fetchProducts());
  }

  render() {
    return (
      <div className='home-page'>
        {/*<Header />*/}
        <HomePageHero/>
        <StickyHeader />
        {/*<Row className='home-page__header'>*/}
        {/*</Row>*/}
        <Container>
          <Row className='product-list-container'>
            <Col md={10} mdoffset={1} data-spy='scroll' target='.sticky-header1' data-offset='0'>
              {
                this.props.productTypes.map((productType) => {
                  const products = this.props.products;
                  return <ProductList productType={productType.name} products={products.filter(product => product.product_type_id === productType.id)} key={productType.id}/>;
                }, this)
              }
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  productTypes: selectBaseProductTypes(state.productTypes.productTypes)
});

export default connect(mapStateToProps)(HomePage);