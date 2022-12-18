import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ShoppingCart from './pages/ShoppingCart';

class App extends Component {
  state = {
    cartItems: [],
  }

  addProductInCart = (productToAdd) => {
    const { cartItems: currItems } = this.state;
    let newItems = [];
    if (currItems
      .every(({ id }) => id !== productToAdd.id)) {
      newItems = [...currItems, { ...productToAdd, quantity: 1 }];
    } else {
      newItems = currItems.map((product) => {
        if (product.id === productToAdd.id) {
          return ({
            ...product,
            quantity: product.quantity + 1,
          });
        }
        return product;
      });
    }
    this.setState({ cartItems: newItems });
  }

  subtractProductInCart = (productToRem) => {
    const { cartItems: currItems } = this.state;
    const newItems = currItems.map((product) => {
      if (product.id === productToRem.id
        && product.quantity > 1) {
        return ({
          ...product,
          quantity: product.quantity - 1,
        });
      }
      return product;
    });
    this.setState({ cartItems: newItems });
  }

  removeProductInCart = (productToRem) => {
    const { cartItems: currItems } = this.state;
    const newItems = currItems.filter(({ id }) => id !== productToRem.id);
    this.setState({ cartItems: newItems });
  }

  render() {
    const {
      state: { cartItems },
      addProductInCart,
      subtractProductInCart,
      removeProductInCart,
    } = this;
    return (
      <div className="App">
        <HashRouter>
          <Route
            exact
            path="/"
            render={ () => (
              <Home
                handleCartButton={ addProductInCart }
              />
            ) }
          />
          <Route
            path="/shoppingcart"
            render={ () => (
              <ShoppingCart
                cartItems={ cartItems }
                handleAddButton={ addProductInCart }
                handleMinusButton={ subtractProductInCart }
                handleRemoveButton={ removeProductInCart }
              />) }
          />
          <Route
            path="/details/:id"
            render={ (props) => (
              <ProductPage
                { ...props }
                handleCartButton={ addProductInCart }
              />) }
          />
        </HashRouter>
      </div>
    );
  }
}

export default App;
