import React from 'react';
import {connect} from 'react-redux';
import {fetchProductTypes} from '../actions/productTypes';

class ProductTypesPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProductTypes());
  }

  render() {
    return (
      <div>
        <h1>Admin - Product Types</h1>
        <p>Fetching: {this.props.isFetching ? 'true' : 'false'}</p>
        {this.props.productTypes.length > 0 ? this.props.productTypes.map(productType => <p key={productType.id}>{productType.name}</p>) : <p>No Product Types</p>}
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