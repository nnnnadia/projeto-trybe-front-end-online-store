import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/secao-produtos.css'

export default class ProdutsDisplay extends Component {
  render() {
    const { searchResult } = this.props;
    return (
      <div className="secao-produtos">
        { searchResult.map(({ id, price, thumbnail, title }) => (
          <div key={ id } className="card-produto" data-testid="product">
            <Link
              to={ `/details/${id}` }
              data-testid="product-detail-link"
            >
              <h3>{ title }</h3>
              <img alt="Produto" src={ thumbnail } />
              <p>{ price }</p>
            </Link>
            <button
              type="button"
              onClick={() => console.log('oi')}
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
