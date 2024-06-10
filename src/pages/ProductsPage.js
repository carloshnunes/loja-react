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
        <div className="search-container">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <input
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
          />
          <select className="order-select">
            <option value="name-asc">Nome (A - Z)</option>
            <option value="name-desc">Nome (Z - A)</option>
            <option value="price-asc">Preço (Baixo para Alto)</option>
            <option value="price-desc">Preço (Alto para Baixo)</option>
          </select>
          <select className="display-select">
            <option value="10">Exibição: 10</option>
            <option value="20">Exibição: 20</option>
            <option value="50">Exibição: 50</option>
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
        <h3 className="filterHeader">Ações Comerciais</h3>
        <div className="filter-group">
          <label>
            <input type="checkbox" /> Em Promoção
          </label>
          <label>
            <input type="checkbox" /> Em Oferta
          </label>
        </div>
        <h3 className="filterHeader">Estoque</h3>
        <div className="filter-group">
          <label>
            <input type="checkbox" /> Estoque Disponível
          </label>
        </div>
        <h3 className="filterHeader">Categorias</h3>
        <div className="filter-group">
          <label>
            <input type="checkbox" /> Genéricos
          </label>
          <label>
            <input type="checkbox" /> Similares
          </label>
          <label>
            <input type="checkbox" /> Psicotrópicos
          </label>
          <label>
            <input type="checkbox" /> Higiene e Beleza
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
