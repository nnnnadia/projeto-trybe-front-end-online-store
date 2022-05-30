import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CategorySelector from '../components/CategorySelector';
import Header from '../components/Header';
import Search from '../components/Search';
import ProductsDisplay from '../components/ProductsDisplay';
import '../css/menu-categorias.css';

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
        category,
        products: {
          results,
        },
      },
      handleInputChange,
      getProductFromApi,
    } = this;
    return (
      <div>
        <Header />
        <div className="container-row">
          <aside>
            <ul className="menu-categorias">
              { categories.map(({ name, id }) => (
                <CategorySelector
                  key={ id }
                  name={ name }
                  id={ id }
                  category={ category }
                  onChange={ handleInputChange }
                />
              ))}
            </ul>
          </aside>
          <main className="container-column">
            <Search
              searchQuery={ searchQuery }
              handleInputChange={ handleInputChange }
              getProductFromApi={ getProductFromApi }
            />
            {!searchQuery
              && !category
              && (
                <p data-testid="home-initial-message">
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </p>)}
            <ProductsDisplay
              searchResult={ results }
            />
          </main>
        </div>
      </div>
    );
  }
}
