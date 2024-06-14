import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { CartContext, totalFromCart } from '../context/CartContext';
import nexfarIcon from './images/nexfar.png';
import cartIcon from './images/shopping-cart.png';
import userIcon from './images/user-icon.png';
import bellIcon from './images/bell.png';

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <div className="logo">
        <img src={nexfarIcon} alt="Logo" className="logo-image" />
      </div>
      <div className="icons">
        <div className="cart-details">
          <p className="userName">Nexfar</p>
          <Link to="/cart" className="cart-icon">
            <img src={cartIcon} alt="Cart" />{' '}
            <span className="cart-value">R${totalFromCart(cart)}</span>
          </Link>
          <span className="cart-minimum">Pedido mínimo: R$ 150,00</span>
        </div>
        <div className="notification-icon">
          <img src={bellIcon}></img>
        </div>
        <div className="user-icon">
          <img src={userIcon} alt="User" />
        </div>
      </div>
    </header>
  );
};

export default Header;
