import React, { useState } from 'react';
import './ProductList.css';

const ProductList = ({ addToCart, removeFromCart, products, cart }) => {
  const [productList] = useState(products);

  console.log(cart);

  return (
    <div className="product-list">
      {productList.map((product) => (
        <div key={product.id} className="product-item">
          <img
            src={product.image}
            alt={product.name}
            className="product-item-image"
          />
          <div className="product-item-details">
            <h2 className="product-item-name">{product.name}</h2>
            <p className="product-item-price">
              {product.price?.finalPrice || 0} USD
            </p>
            <button className="add-button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <button
              className="remove-button"
              onClick={() => removeFromCart(product.id)}
            >
              Remove From Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
