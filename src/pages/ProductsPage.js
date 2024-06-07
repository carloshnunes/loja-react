import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import products from '../data/products.json';
import ProductList from '../components/ProductList';
import './ProductsPage.css';

const ProductsPage = () => {
  const { addToCart, removeFromCart, cart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-page">
      <input
        type="text"
        placeholder="Pesquisar produtos..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
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
