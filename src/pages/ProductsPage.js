import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import products from '../data/products.json';
import ProductList from '../components/ProductList';
import './ProductsPage.css';
import searchIcon from '../components/images/search-icon.png';

const ProductsPage = () => {
  const { addToCart, removeFromCart, cart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-page">
      <div className="main-content">
        <div className="search-bar"></div>
        <div className="search-container">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <input
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
          />
          <p className="sort-label">Ordenar por:</p>
          <select className="order-select">
            <option value="name-asc">Nome (A - Z)</option>
            <option value="name-desc">Nome (Z - A)</option>
            <option value="price-asc">Preço (Baixo para Alto)</option>
            <option value="price-desc">Preço (Alto para Baixo)</option>
          </select>
          <p className="sort-label-second"> Exibição: </p>
          <select className="display-select">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
        <ProductList
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          products={filteredProducts}
          cart={cart}
        />
      </div>
      <div className="sidebar">
        <h3 className="filterHeader">AÇÕES COMERCIAIS</h3>
        <div className="filter-group">
          <label className="filter-option">
            <input type="checkbox" /> EM PROMOÇÃO
          </label>
          <label className="filter-option">
            <input type="checkbox" /> EM OFERTA
          </label>
        </div>
        <h3 className="filterHeader">ESTOQUE</h3>
        <div className="filter-group">
          <label className="filter-option">
            <input type="checkbox" /> ESTOQUE DISPONÍVEL
          </label>
        </div>
        <h3 className="filterHeader">CATEGORIAS</h3>
        <div className="filter-group">
          <label className="filter-option">
            <input type="checkbox" /> GENÉRICOS
          </label>
          <label className="filter-option">
            <input type="checkbox" /> SIMILARES
          </label>
          <label className="filter-option">
            <input type="checkbox" /> PSICOTRÓPICOS
          </label>
          <label className="filter-option">
            <input type="checkbox" /> HIGIENE E BELEZA
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
