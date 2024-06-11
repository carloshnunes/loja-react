import React, { useState } from 'react';
import './ProductList.css';
import barcodeLogo from './images/barcode.png';
import infoLogo from './images/info.png';
import productPlaceholder from './images/medicine.png';

const ProductList = ({ addToCart, removeFromCart, products, cart }) => {
  const [productList] = useState(products);

  console.log(cart);

  return (
    <div className="product-list">
      {productList.map((product) => (
        <div key={product.id} className="product-item">
          <div className="product-item-header">
            <div className="baloon-sku">
              <p className="code-product">{product.sku}</p>
            </div>
            <h2 className="product-item-name">{product.name}</h2>
            <img src={barcodeLogo} alt="Logo" className="barcode-logo" />
            <img src={infoLogo} alt="Logo" className="info-logo" />
          </div>
          <div className="product-item-body">
            <img
              src={productPlaceholder}
              alt={product.name}
              className="product-item-image"
            />
            <div className="product-item-info">
              <div className="product-item-price">
                Base: {product.base || 'N/A'}
              </div>
              <div className="product-item-stock">
                Estoque: {product.quantityAvailable || '0'} un
              </div>
              <div className="product-item-quantity">
                Quantidade (un):
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
              <div className="product-item-value">
                Valor: {product.price?.finalPrice || 0} USD
              </div>
            </div>
          </div>
          <div className="product-item-footer">
            <div className="balloon">
              <p className="product-item-maker">{product.maker}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
