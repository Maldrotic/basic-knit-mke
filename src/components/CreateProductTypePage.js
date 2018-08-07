import React from 'react';
import ProductTypeForm from './ProductTypeForm';
import {Link} from 'react-router-dom';
import {Breadcrumb} from 'react-bootstrap';

class CreateProductTypePage extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(values) {
    console.log(values);
    this.props.history.push('/admin/product_types');
  }

  render() {
    return (
      <div className="create-product-type">
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
                           href="/admin/product_types/create"
                           to="/admin/product_types/create" >
            Create
          </Breadcrumb.Item>
        </Breadcrumb>
        <ProductTypeForm onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    );
  }

}


export default CreateProductTypePage;