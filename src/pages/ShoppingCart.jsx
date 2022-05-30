import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCartItem from '../components/ShoppingCartItem';

export default class ShoppingCart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems
          ? (
            cartItems.map((idProduct) => (
              <ShoppingCartItem
                key={ idProduct }
                idProduct={ idProduct }
              />
            ))
          ) : (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>)}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};
