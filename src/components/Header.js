import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" className="logo-image" />
        <h1>Nexfar</h1>
      </div>
      <input type="text" placeholder="Pesquisar" className="search-bar" />
      <div className="icons">
        <Link to="/cart" className="cart-icon">
          <img src="/images/cart-icon.png" alt="Cart" />
          R$ 450,00
        </Link>
        <span className="cart-minimum">Pedido mínimo: R$ 150,00</span>
        <span className="user-icon">
          <img src="/images/user-icon.png" alt="User" />
        </span>
      </div>
    </header>
  );
};

export default Header;
