import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CategorySelector from '../components/CategorySelector';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

export default class Home extends Component {
  state = {
    searchQuery: '',
    categories: [],
    category: '',
    products: {
      results: [],
    },
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      if (name === 'category') this.getProductFromApi();
    });
  }

  getProductFromApi = async () => {
    const { searchQuery, category } = this.state;
    const products = await getProductsFromCategoryAndQuery(category, searchQuery);
    this.setState({ products });
  }

  render() {
    const {
      state: {
        searchQuery,
        categories,
        products,
      },
      handleInputChange,
      getProductFromApi,
    } = this;
    return (
      <div>
        <Header />
        <aside>
          <ul>
            { categories.map(({ name, id }) => (
              <CategorySelector
                key={ id }
                name={ name }
                id={ id }
                onChange={ handleInputChange }
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
            data-testid="query-input"
          />
          <button
            type="button"
            onClick={ getProductFromApi }
            data-testid="query-button"
          >
            Pesquisar
          </button>
          {!searchQuery
              && (
                <p data-testid="home-initial-message">
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </p>)}
        </form>
        <div>
          { products.results.map(({ id, price, thumbnail, title }) => (
            <ProductCard
              key={ id }
              name={ title }
              image={ thumbnail }
              price={ price }
            />
          )) }
        </div>
      </div>
    );
  }
}
