import React, { useState } from 'react';
import './ProductList.css';

const ProductList = ({ addToCart, removeFromCart, products, cart }) => {
  const [productList] = useState(products);

  console.log(cart);

  return (
    <div className="product-list">
      {productList.map((product) => (
        <div key={product.id} className="product-item">
          <div className="product-item-header">
            <h2 className="product-item-name">{product.name}</h2>
          </div>
          <div className="product-item-details">
            <div className="product-item-category"></div>
            <img
              src={product.image}
              alt={product.name}
              className="product-item-image"
            />
            <p className="product-item-price">
              {product.price?.finalPrice || 0} USD
            </p>
            <div className="product-item-actions">
              <p>Quantidade(un)</p>
              <button
                className="quantity-button-minus"
                onClick={() => removeFromCart(product.id)}
              >
                -
              </button>
              <span className="product-quantity">
                {cart.filter((item) => item.id === product.id)?.length || 0}
              </span>
              <button
                className="quantity-button"
                onClick={() => addToCart(product)}
              >
                +
              </button>
            </div>
          </div>
          <div className="product-item-footer"></div>
          <h3 className="product-item-maker">{product.maker}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
