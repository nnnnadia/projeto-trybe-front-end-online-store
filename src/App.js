import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ShoppingCart from './pages/ShoppingCart';

class App extends Component {
  state = {
    cartItems: [],
  }

  addProductInCart = (id) => {
    console.log(id);
    this.setState(({ cartItems }) => ({
      cartItems: [...cartItems, id],
    }));
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Route
            exact
            path="/"
            render={ () => (
              <Home
                addProduct={ this.addProductInCart }
              />
            ) }
          />
          <Route
            path="/shoppingcart"
            render={ () => (
              <ShoppingCart
                cartItems={ cartItems }
              />) }
          />
          <Route path="/details/:id" component={ ProductPage } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
