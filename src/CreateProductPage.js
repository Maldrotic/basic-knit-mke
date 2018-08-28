import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createProduct} from './actions/products';

class CreateProductPage extends React.Component {
  constructor(props) {
    super(props);
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
                           href="/admin/product_types"
                           to="/admin/product_types" >
            Product Types
          </Breadcrumb.Item>
          <Breadcrumb.Item componentClass={Link}
                           href={`/admin/product_types/${this.props.productTypeId}`}
                           to={`/admin/product_types/${this.props.productTypeId}`} >
            {this.props.productTypeId}
          </Breadcrumb.Item>
          <Breadcrumb.Item componentClass={Link}
                           href={`/admin/product_types/${this.props.productTypeId}/create`}
                           to={`/admin/product_types/${this.props.productTypeId}/create`} >
            Create
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}

export default connect()(CreateProductPage);