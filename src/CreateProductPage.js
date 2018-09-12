import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createProduct} from './actions/products';
import {fetchProductTypes} from './actions/productTypes';
import {selectProductType} from './selectors/productTypes';
import ProductForm from './components/ProductForm';
import queryString from 'query-string';

class CreateProductPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchProductTypes());
  }

  handleSubmit(values) {
    this.props.dispatch(createProduct(values));
  }

  render() {
    if (this.props.isFetching && this.props.productType === undefined) {
      return (
        <div className="create-product">
          <p>Loading...</p>
        </div>
      );
    } else if (this.props.productType === undefined) {
      return (
        <div className="create-product">
          <p>Product Type not found</p>
        </div>
      );
    } else {
      return (
        <div className="create-product">
          <Breadcrumb>
            <Breadcrumb.Item componentClass={Link}
                             href="/admin"
                             to="/admin" >
              Admin
            </Breadcrumb.Item>
            <Breadcrumb.Item componentClass={Link}
                             href="/admin/product_types"
                             to="/admin/products_types" >
              Product Types
            </Breadcrumb.Item>
            <Breadcrumb.Item componentClass={Link}
                             href={`/admin/product_types/${this.props.productType.id}`}
                             to={`/admin/product_types/${this.props.productType.id}`} >
              {this.props.productType.name}
            </Breadcrumb.Item>
            <Breadcrumb.Item componentClass={Link}
                             href={`/admin/product_types/${this.props.productType.id}/products`}
                             to={`/admin/product_types/${this.props.productType.id}/products`} >
              Products
            </Breadcrumb.Item>
            <Breadcrumb.Item componentClass={Link}
                             href={`/admin/product_types/${this.props.productType.id}/products/create`}
                             to={`/admin/product_types/${this.props.productType.id}/products/create`} >
              Create
            </Breadcrumb.Item>
          </Breadcrumb>
          <ProductForm selectedProductTypeId={this.props.productType.id} onSubmit={this.handleSubmit.bind(this)} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, props) => ({
  isFetching: state.productTypes.isFetching,
  productTypes: state.productTypes.productTypes,
  productType: selectProductType(props.match.params.productTypeId, state.productTypes.productTypes)
});

export default connect(mapStateToProps)(CreateProductPage);