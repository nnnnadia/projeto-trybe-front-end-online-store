import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  state = {
    searchQuery: '',
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      state: { searchQuery },
      handleInputChange,
    } = this;
    return (
      <div>
        <header>
          <nav>
            <Link
              to="/shoppingcart"
              data-testid="shopping-cart-button"
            >
              Carrinho
            </Link>
          </nav>
        </header>
        <form>
          <input
            type="text"
            name="searchQuery"
            value={ searchQuery }
            onChange={ handleInputChange }
          />
          {!searchQuery
              && (
                <p data-testid="home-initial-message">
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </p>)}
        </form>
      </div>
    );
  }
}
