import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createProduct} from '../../actions/products';
import {fetchProductTypes} from '../../actions/productTypes';
import {selectProductType} from '../../selectors/productTypes';
import ProductForm from './ProductForm';
import queryString from 'query-string';

class CreateProductPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.dispatch(fetchProductTypes());
  }

  handleSubmit(values) {
    this.props.dispatch(createProduct(values));
  }

  render() {
    return (
      <div className="create-product">
        <Breadcrumb>
          <Breadcrumb.Item componentClass={Link}
                           href="/admin"
                           to="/admin" >
            Admin
          </Breadcrumb.Item>
          <Breadcrumb.Item componentClass={Link}
                           href="/admin/products"
                           to="/admin/products" >
            Products
          </Breadcrumb.Item>
          <Breadcrumb.Item componentClass={Link}
                           href={`/admin/products/create`}
                           to={`/admin/products/create`} >
            Create
          </Breadcrumb.Item>
        </Breadcrumb>
        {
          this.props.queriedProductTypeId ?
            <ProductForm selectedProductTypeId={this.props.queriedProductTypeId}
                         onSubmit={this.handleSubmit.bind(this)} />
            :
            <ProductForm onSubmit={this.handleSubmit.bind(this)} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const stateToProps = {};

  const parsedQueryString = queryString.parse(location.search);
  if (parsedQueryString['productTypeId']) {
    stateToProps['queriedProductTypeId'] = parseInt(parsedQueryString['productTypeId']);
  }

  return stateToProps;
};

// const mapStateToProps = (state, props) => ({
//   isFetching: state.productTypes.isFetching,
//   productTypes: state.productTypes.productTypes,
//   productType: selectProductType(props.productType.id, state.productTypes.productTypes)
// });

export default connect(mapStateToProps)(CreateProductPage);