import React from 'react';
import HomePageHero from './HomePageHero';
import Header from './Header';
import {StickyContainer, Sticky} from 'react-sticky';
import {selectBaseProductTypes} from '../../selectors/productTypes';
import {connect} from 'react-redux';
import ProductList from '../home/ProductList';
import {fetchProductTypes} from '../../actions/productTypes';
import {fetchProducts} from '../../actions/products';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProductTypes());
    this.props.dispatch(fetchProducts());
  }

  render() {
    return (
      <div className='home-page'>
        <HomePageHero/>
        <StickyContainer>

          <Sticky>
            {({style}) => (
                <Header style={style} />
            )}
          </Sticky>
          <div className='product-lists'>
            {
              this.props.productTypes.map((productType) => {
                const products = this.props.products;
                return <ProductList productType={productType.name} products={products.filter(product => product.product_type_id === productType.id)} key={productType.id}/>;
              }, this)
            }
          </div>
          <div className='footer'>

          </div>
        </StickyContainer>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  products: state.products.products,
  productTypes: selectBaseProductTypes(state.productTypes.productTypes)
});

export default connect(mapStateToProps)(HomePage);