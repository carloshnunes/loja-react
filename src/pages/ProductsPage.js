import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import products from '../data/products.json';
import ProductList from '../components/ProductList';

const ProductsPage = () => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <ProductList
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      products={products}
    />
  );
};

export default ProductsPage;
