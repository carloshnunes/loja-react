import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import fireIcon from './images/fire.png';
import boxIcon from './images/box.png';
import receiptIcon from './images/invoice.png';
import couponIcon from './images/ticket.png';
import storeIcon from './images/pharmacy.png';
import whatsappIcon from './images/phone-message.png';
import phoneIcon from './images/telephone.png';
import pharmacy from './images/pharmacy.png';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="client-id">
        <img src={pharmacy} alt="Pharmacy" />
        <ul className="clientLogin">
          <p>Farmácia São João</p>
          <p>000.000.000/000-00</p>
        </ul>
      </div>
      <nav>
        <h2 className="sidebar-header">COMPRAS</h2>
        <ul>
          <li className="sidebar-options">
            <Link to="/promotions">
              <img src={fireIcon} alt="Promotions" />
              Promoções
            </Link>
          </li>
          <li className="sidebar-options">
            <Link to="/">
              <img src={boxIcon} alt="Products" />
              Produtos
            </Link>
          </li>
          <li className="sidebar-options">
            <Link to="/checkout">
              <img src={receiptIcon} alt="Orders" />
              Pedidos
            </Link>
          </li>
          <li className="sidebar-options">
            <Link to="#">
              <img src={couponIcon} alt="Coupons" />
              Cupons
            </Link>
          </li>
        </ul>
        <h2 className="sidebar-header">ADMINISTRATIVO</h2>
        <ul>
          <li className="sidebar-options">
            <Link to="#">
              <img src={storeIcon} alt="Stores" />
              Estabelecimentos
            </Link>
          </li>
        </ul>
        <h2 className="sidebar-header">AJUDA</h2>
        <ul>
          <li className="sidebar-options">
            <Link to="#">
              <img src={whatsappIcon} alt="Whatsapp" />
              Whatsapp
            </Link>
          </li>
          <li className="sidebar-options">
            <Link to="#">
              <img src={phoneIcon} alt="Distributor Contact" />
              Contato Distribuidora
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
