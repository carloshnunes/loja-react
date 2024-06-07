import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import products from '../data/products.json';
import ProductList from '../components/ProductList';
import './ProductsPage.css';

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
      <div className="search-container">
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
  );
};

export default ProductsPage;
