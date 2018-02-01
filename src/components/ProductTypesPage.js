import React from 'react';
import {connect} from 'react-redux';
import {fetchProductTypes} from '../actions/productTypes';
import {Link} from 'react-router-dom';

class ProductTypesPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProductTypes());
  }

  render() {
    return (
      <div>
        <h1>Admin - Product Types</h1>
        <p>Fetching: {this.props.isFetching ? 'true' : 'false'}</p>
        <ul>
          {this.props.productTypes.length > 0 ? this.props.productTypes.map(productType => <li key={productType.id}><Link to={`/admin/product_types/${productType.id}`}>{productType.name}</Link></li>) : <li><p>No Product Types</p></li>}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.productTypes.isFetching,
  productTypes: state.productTypes.data
});

const ConnectedProductTypesPage = connect(mapStateToProps)(ProductTypesPage);
export default ConnectedProductTypesPage;