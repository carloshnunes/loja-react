import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart, removeFromCart }) => {
  return (
    <div className="product-card">
      <input type="text" placeholder="Pesquisar" className="search-bar" />
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price.finalPrice}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => removeFromCart(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;
