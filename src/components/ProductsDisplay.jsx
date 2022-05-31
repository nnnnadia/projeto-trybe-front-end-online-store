import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/secao-produtos.css';

export default class ProdutsDisplay extends Component {
  render() {
    const { searchResult, handleCartButton } = this.props;
    return (
      <div className="secao-produtos">
        { searchResult.map((product) => (
          <div key={ product.id } className="card-produto" data-testid="product">
            <Link
              className="link-produto"
              to={ `/details/${product.id}` }
              data-testid="product-detail-link"
            >
              <img alt="Produto" src={ product.thumbnail } />
              <h3>{ product.title }</h3>
              <p>{ product.price }</p>
            </Link>
            <button
              className="botao-produto"
              type="button"
              onClick={ () => handleCartButton(product) }
              data-testid="product-add-to-cart"
            >
              Adicionar ao carrinho
            </button>
          </div>
        )) }
      </div>
    );
  }
}

ProdutsDisplay.propTypes = {
  searchResult: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
  handleCartButton: PropTypes.func.isRequired,
};
