import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems
          && (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>)}
      </div>
    );
  }
}

// corrigir cartItems
ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};
