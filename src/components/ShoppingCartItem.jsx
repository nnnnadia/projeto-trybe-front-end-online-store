import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as PlusIcon } from '../assets/icons/plus-square.svg';
import { ReactComponent as MinusIcon } from '../assets/icons/dash-square.svg';

class ShoppingCartItem extends React.Component {
  render() {
    const {
      props: { 
        product,
        product: {
          title,
          thumbnail,
          quantity,
          price,
        },
        handleAddButton,
        handleRemoveButton
      },
    } = this;
    return (
      <div>
        <h2 data-testid="shopping-cart-product-name">
          { title }
        </h2>
        <img src={ thumbnail } alt={ title } />
        <button
          type="button"
          onClick={ () => handleAddButton(product) }
          data-testid="product-increase-quantity"
        >
          <PlusIcon />
        </button>
        <p data-testid="shopping-cart-product-quantity">
          { quantity }
        </p>
        <button
          type="button"
          onClick={ () => handleRemoveButton(product) }
          data-testid="product-decrease-quantity"
        >
          <MinusIcon />
        </button>
        <p>
          { price }
        </p>
      </div>
    );
  }
}

ShoppingCartItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  handleAddButton: PropTypes.func.isRequired,
  handleRemoveButton: PropTypes.func.isRequired,
};

export default ShoppingCartItem;
