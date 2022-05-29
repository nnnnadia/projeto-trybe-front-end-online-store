import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { name, image, price, id } = this.props;
    return (
      <div>
        <Link
          to={ `/details/${id}` }
        >
          <div data-testid="product">
            <h3>{ name }</h3>
            <img alt="Produto" src={ image } />
            <p>{ price }</p>
          </div>
        </Link>
        <button
          type="button"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
