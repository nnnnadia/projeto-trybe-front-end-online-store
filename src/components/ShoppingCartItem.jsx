import React from 'react';
import PropTypes from 'prop-types';
import { getProductsInfo } from '../services/api';

class ShoppingCartItem extends React.Component {
  state = {
    title: '',
    thumbnail: '',
    price: 0,
  }

  async componentDidMount() {
    const { idProduct } = this.props;
    const productInfo = await getProductsInfo(idProduct);
    const {
      title,
      thumbnail,
      price,
    } = productInfo;
    this.setState({
      title,
      thumbnail,
      price,
    });
  }

  render() {
    const {
      state: { title, thumbnail, price },
      props: { quantityProduct },
    } = this;
    return (
      <div>
        <h2 data-testid="shopping-cart-product-name">{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="shopping-cart-product-quantity">{ quantityProduct }</p>
        <p>{ price }</p>
      </div>
    );
  }
}

ShoppingCartItem.propTypes = {
  idProduct: PropTypes.string.isRequired,
  quantityProduct: PropTypes.number.isRequired,
};

export default ShoppingCartItem;
