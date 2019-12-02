import React from 'react';
import {connect} from 'react-redux';
import {selectProduct} from '../../selectors/products';
import {Breadcrumb} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {fetchProduct} from '../../actions/products';

class AdminProductPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProduct(parseInt(this.props.match.params.id)));
  }

  render() {
    return (
      <div>
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
                           href={`/admin/products/${this.props.match.params.id}`}
                           to={`/admin/products/${this.props.match.params.id}`} >
            {this.props.match.params.id}
          </Breadcrumb.Item>
        </Breadcrumb>
        { this.props.product ? (
          <div>
            <h4>{this.props.product.name} (ID: {this.props.product.id})</h4>
          </div>
        ) : (
          <h2>Product, {this.props.match.params.id}, not found :(</h2>
        )}
      </div>
    );
  }

}

const mapStateToProps = (state, props) => ({
  product: selectProduct(props.match.params.id, state.products.products)
});

export default connect(mapStateToProps)(AdminProductPage);