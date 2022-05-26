import React, { Component } from 'react';

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
