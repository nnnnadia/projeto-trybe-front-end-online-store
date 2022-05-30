import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/secao-produtos.css';

export default class ProdutsDisplay extends Component {
  render() {
    const { searchResult } = this.props;
    return (
      <div className="secao-produtos">
        { searchResult.map(({ id, price, thumbnail, title }) => (
          <div key={ id } className="card-produto" data-testid="product">
            <Link
              className="link-produto"
              to={ `/details/${id}` }
              data-testid="product-detail-link"
            >
              <img alt="Produto" src={ thumbnail } />
              <h3>{ title }</h3>
              <p>{ price }</p>
            </Link>
            <button
              className="botao-produto"
              type="button"
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
};
