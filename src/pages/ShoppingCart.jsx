import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCartItem from '../components/ShoppingCartItem';

export default class ShoppingCart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.length > 0
          ? (
            <>
              { cartItems.map(({ idProduct, quantityProduct }) => (
                <ShoppingCartItem
                  key={ idProduct }
                  idProduct={ idProduct }
                  quantityProduct={ quantityProduct }
                />
              )) }
            </>
          ) : (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>)}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    idProduct: PropTypes.string,
    quantityProduct: PropTypes.number,
  })).isRequired,
};
