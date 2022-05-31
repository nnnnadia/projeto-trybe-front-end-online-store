import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../assets/icons/cart4.svg';
import '../css/cabecalho.css';
import '../css/titulo-principal.css';
import '../css/botao-carrinho.css';

export default function Header() {
  return (
    <header className="cabecalho">
      <Link to="/">
        <h1 className="titulo-principal">Online Store</h1>
      </Link>
      <nav>
        <div className="botao-carrinho">
          <Link to="/shoppingcart" data-testid="shopping-cart-button">
            <CartIcon />
            Carrinho
          </Link>
        </div>
      </nav>
    </header>
  );
}
