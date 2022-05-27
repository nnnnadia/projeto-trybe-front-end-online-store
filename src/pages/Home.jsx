import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import CategorySelector from '../components/CategorySelector';

export default class Home extends Component {
  state = {
    searchQuery: '',
    categories: [],
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      state: {
        searchQuery,
        categories,
      },
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
        <aside>
          <ul>
            { categories.map(({ name, id }) => (
              <CategorySelector
                key={ id }
                name={ name }
                id={ id }
              />
            ))}
          </ul>
        </aside>
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
