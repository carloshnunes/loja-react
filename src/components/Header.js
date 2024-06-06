import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import nexfarIcon from './images/nexfar.png';
import cartIcon from './images/shopping-cart.png';
import userIcon from './images/user-icon.png';

const Header = () => {
  const { cart } = useContext(CartContext);

  const totalCartValue = cart
    .reduce((acc, item) => acc + (item.price?.finalPrice || 0), 0)
    .toFixed(2);

  return (
    <header className="header">
      <div className="logo">
        <img src={nexfarIcon} alt="Logo" className="logo-image" />
      </div>
      <div className="icons">
        <div className="cart-details">
          <h2>Nexfar</h2>
          <Link to="/cart" className="cart-icon">
            <img src={cartIcon} alt="Cart" />{' '}
            <span className="cart-value">R$ {totalCartValue}</span>
          </Link>
          <span className="cart-minimum">Pedido mínimo: R$ 150,00</span>
        </div>
        <span className="user-icon">
          <img src={userIcon} alt="User" />
        </span>
      </div>
    </header>
  );
};

export default Header;
