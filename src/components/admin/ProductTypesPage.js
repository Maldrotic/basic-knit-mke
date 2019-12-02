import React from 'react';
import {connect} from 'react-redux';
import {fetchProductTypes} from '../../actions/productTypes';
import {Link, withRouter} from 'react-router-dom';
import AdminPageTitle from './AdminPageTitle';
import PrimaryButton from '../common/PrimaryButton';
import ProductSummaryCard from './ProductSummaryCard';
import NegativeButton from '../common/NegativeButton';
import {fetchProducts} from '../../actions/products';
import {selectProductsWithProductType} from '../../selectors/products';
import ProductTypeCard from './ProductTypeCard';
import AdminPageHeaderTitle from './AdminPageHeaderTitle';
import AdminSidebar from './AdminSidebar';
import AdminProductTypesList from './AdminProductTypesList';
import AdminActionList from './AdminActionList';
import AdminActionListLeft from './AdminActionListLeft';
import AdminActionListRight from './AdminActionListRight';

class ProductTypesPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    this.props.dispatch(await fetchProductTypes());
    this.props.dispatch(fetchProducts());
  };

  handleAddProductTypeButtonClicked = (e) => {
    e.preventDefault();
    this.props.history.push(`/admin/product_types/create`);
  };

  render() {
    return (
      <div className="admin__product_types admin__container">
        <AdminPageTitle>Product Types</AdminPageTitle>
        {/* TODO: One day have breadcrumbs here */}
        <AdminActionList>
          <AdminActionListLeft>

          </AdminActionListLeft>
          <AdminActionListRight>
            <PrimaryButton text='Add Product Type' onClickHandler={this.handleAddProductTypeButtonClicked}/>
          </AdminActionListRight>
        </AdminActionList>
        <AdminProductTypesList productTypes={this.props.productTypes} products={this.props.products}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.productTypes.isFetching,
  productTypes: state.productTypes.productTypes,
  products: state.products.products
});

const ConnectedProductTypesPage = connect(mapStateToProps)(ProductTypesPage);
export default ConnectedProductTypesPage;