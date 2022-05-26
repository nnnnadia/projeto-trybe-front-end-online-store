import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

class App extends Component {
  state = {
    cartItems: [],
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={ Home } />
          <Route
            path="/shoppingcart"
            render={ () => (
              <ShoppingCart
                cartItems={ cartItems }
              />) }
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
