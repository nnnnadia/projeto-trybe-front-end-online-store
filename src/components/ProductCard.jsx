import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { name, image, price } = this.props;
    return (
      <div data-testid="product">
        <h3>{ name }</h3>
        <img alt="Produto" src={ image } />
        <p>{ price }</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
