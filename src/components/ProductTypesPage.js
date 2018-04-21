import React from 'react';
import {connect} from 'react-redux';
import {fetchProductTypes} from '../actions/productTypes';
import {Link} from 'react-router-dom';
import {Breadcrumb} from 'react-bootstrap';

class ProductTypesPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProductTypes());
  }

  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item><Link to='/admin'>Admin</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to='/admin/product_types'>Product Types</Link></Breadcrumb.Item>
        </Breadcrumb>
        <ul>
          {this.props.productTypes.length > 0 ? this.props.productTypes.map(productType => <li key={productType.id}><Link to={`/admin/product_types/${productType.id}`}>{productType.name}</Link></li>) : <li><p>No Product Types</p></li>}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.productTypes.isFetching,
  productTypes: state.productTypes.productTypes
});

const ConnectedProductTypesPage = connect(mapStateToProps)(ProductTypesPage);
export default ConnectedProductTypesPage;