import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import products from '../data/products.json';
import ProductList from '../components/ProductList';
import './ProductsPage.css'; // Importação do CSS

const ProductsPage = () => {
  const { addToCart, removeFromCart, cart } = useContext(CartContext);

  return (
    <div className="products-page">
      <ProductList
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        products={products}
        cart={cart}
      />
    </div>
  );
};

export default ProductsPage;
