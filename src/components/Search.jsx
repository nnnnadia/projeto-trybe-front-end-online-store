import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';
import '../css/campo-busca.css';

export default class Search extends Component {
  render() {
    const {
      searchQuery,
      handleInputChange,
      getProductFromApi,
    } = this.props;
    return (
      <form className="container-row campo-busca">
        <input
          type="text"
          name="searchQuery"
          value={ searchQuery }
          onChange={ handleInputChange }
          data-testid="query-input"
        />
        <button
          type="button"
          onClick={ getProductFromApi }
          data-testid="query-button"
        >
          <SearchIcon />
          Pesquisar
        </button>
      </form>
    );
  }
}

Search.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  getProductFromApi: PropTypes.func.isRequired,
};
