import React from 'react';
import {selectProductType, selectProductTypesChildren} from '../selectors/productTypes';
import {connect} from 'react-redux';
import {selectProductsWithProductType} from '../selectors/products';
import {Link} from 'react-router-dom';
import { fetchProductTypes} from '../actions/productTypes';
import {fetchProducts} from '../actions/products';
import {Breadcrumb} from 'react-bootstrap';

class ProductTypePage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProductTypes());
    this.props.dispatch(fetchProducts());
  }

  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item componentClass={Link}
                           href="/admin"
                           to="/admin">
            Admin
          </Breadcrumb.Item>
          <Breadcrumb.Item componentClass={Link}
                           href="/admin/product_types"
                           to="/admin/product_types">
            Product Types
          </Breadcrumb.Item>
          <Breadcrumb.Item componentClass={Link}
                           href={`/admin/product_types/${this.props.match.params.id}`}
                           to={`/admin/product_types/${this.props.match.params.id}`}>
            {this.props.match.params.id}
          </Breadcrumb.Item>
        </Breadcrumb>
        { this.props.productType ? (
          <div>
            <h1>{this.props.productType.name} (ID: {this.props.productType.id})</h1>
            <h5>Children Product Types: {this.props.productTypes.length === 0 && <small>None</small>}</h5>
            <ul>
              {
                this.props.productTypes.length > 0 && this.props.productTypes.map(productType => (
                    <li key={productType.id}>
                      <Link to={`/admin/product_types/${productType.id}`} >{productType.name}</Link>
                    </li>
                  )
                )
              }
            </ul>
            <h5>Products for type: {this.props.products.length === 0 && <small>None</small>}</h5>
            <ul>
              {
                this.props.products.length > 0 && this.props.products.map(product => (
                  <li key={product.id}>
                    <Link to={`/admin/products/${product.id}`}>{product.name}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        ) : (
          <div>
            <h2>Product Type, {this.props.match.params.id}, not found :(</h2>
          </div>
        )}
      </div>
    );
  }

}

const mapStateToProps = (state, props) => ({
  isFetching: state.productTypes.isFetching,
  productType: selectProductType(props.match.params.id, state.productTypes.productTypes),
  productTypes: selectProductTypesChildren(props.match.params.id, state.productTypes.productTypes),
  products: selectProductsWithProductType(props.match.params.id, state.products.products)
});

export default connect(mapStateToProps)(ProductTypePage);