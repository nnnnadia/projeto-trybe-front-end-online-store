import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/secao-produtos.css'

export default class ProdutsDisplay extends Component {
  render() {
    const { searchResult } = this.props;
    return (
      <div className="secao-produtos">
        { searchResult.map(({ id, price, thumbnail, title }) => (
          <div key={ id } className="card-produto" data-testid="product">
          <h3>{ title }</h3>
          <img alt="Produto" src={ thumbnail } />
          <p>{ price }</p>
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
