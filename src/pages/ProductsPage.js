import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductsPage = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      {/* Renderize seus produtos aqui */}
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductsPage;
