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
            <div className="product-item-actions">
              <button
                className="quantity-button"
                onClick={() => removeFromCart(product.id)}
              >
                -
              </button>
              <span className="product-quantity">
                {cart.find((item) => item.id === product.id)?.quantity || 0}
              </span>
              <button
                className="quantity-button"
                onClick={() => addToCart(product)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
