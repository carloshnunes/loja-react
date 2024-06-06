import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src="/images/icon-products.png" alt="Products" />
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <img src="/images/icon-cart.png" alt="Cart" />
              Carrinho
            </Link>
          </li>
          <li>
            <Link to="/checkout">
              <img src="/images/icon-checkout.png" alt="Checkout" />
              Checkout
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
