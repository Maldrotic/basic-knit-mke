import React from 'react';
import {connect} from 'react-redux';
import {fetchProductTypes} from '../actions/productTypes';
import {Link} from 'react-router-dom';
import {Breadcrumb, Button, Glyphicon} from 'react-bootstrap';

class ProductTypesPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProductTypes());
  }

  render() {
    return (
      <div className="product-types">
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
        </Breadcrumb>
        <Button componentClass={Link}
                href="/admin/product_types/create"
                to="/admin/product_types/create" >
          <Glyphicon glyph='plus' /> New Product Type
        </Button>
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