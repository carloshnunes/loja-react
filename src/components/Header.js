import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import nexfarIcon from './images/nexfar.png';
import cartIcon from './images/shopping-cart.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={nexfarIcon} alt="Logo" className="logo-image" />
      </div>
      <div className="icons">
        <Link to="/cart" className="cart-icon">
          <img src={cartIcon} alt="Cart" />
          R$ 450,00
        </Link>
        <h3>Nexfar</h3>
        <span className="cart-minimum">Pedido mínimo: R$ 150,00</span>
        <span className="user-icon">
          <img src="/images/user-icon.png" alt="User" />
        </span>
      </div>
    </header>
  );
};

export default Header;
