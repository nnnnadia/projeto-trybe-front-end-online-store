import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCartItem from '../components/ShoppingCartItem';

export default class ShoppingCart extends Component {
  render() {
    const {
      cartItems,
      handleAddButton,
      handleMinusButton,
      handleRemoveButton,
    } = this.props;
    return (
      <div>
        {cartItems.length > 0
          ? (
            <>
              { cartItems.map((product) => (
                <ShoppingCartItem
                  key={ product.id }
                  product={ product }
                  handleAddButton={ handleAddButton }
                  handleMinusButton={ handleMinusButton }
                  handleRemoveButton={ handleRemoveButton }
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
    id: PropTypes.string,
  })).isRequired,
  handleAddButton: PropTypes.func.isRequired,
  handleMinusButton: PropTypes.func.isRequired,
  handleRemoveButton: PropTypes.func.isRequired,
};
