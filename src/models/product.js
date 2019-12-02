class Product {

  constructor(id, name, description, productTypeId, price, primaryImageId) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._productTypeId = productTypeId;
    this._price = price;
    this._primaryImageId = primaryImageId;
  }

  static fromObject(product = {
    id: undefined,
    name: '',
    description: '',
    productTypeId: undefined,
    price: 0,
    primaryImageId: undefined
  }) {
    return new Product(product.id, product.name, product.description, product.productTypeId, product.price, product.primaryImageId)
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get productTypeId() {
    return this._productTypeId;
  }

  set productTypeId(value) {
    this._productTypeId = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  get primaryImageId() {
    return this._primaryImageId;
  }

  set primaryImageId(value) {
    this._primaryImageId = value;
  }

}

export default Product;