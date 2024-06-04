import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductList from '../components/ProductList';

const ProductsPage = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Products</h1>
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default ProductsPage;
