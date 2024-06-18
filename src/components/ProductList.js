import React from 'react';
import './ProductList.css';
import barcodeLogo from './images/barcode.png';
import infoLogo from './images/info.png';
import productPlaceholder from './images/medicine.png';
import deleteIcon from './images/delete.png';

const ProductList = ({ addToCart, removeFromCart, products, cart }) => {
  console.log('Produtos recebidos pelo ProductList:', products);
  console.log('Carrinho:', cart);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <div className="product-item-header">
            <div className="header-left">
              <div className="baloon-sku">
                <p className="code-product">{product.sku}</p>
              </div>
              <h2 className="product-item-name">{product.name}</h2>
            </div>
            <div className="header-right">
              <img src={barcodeLogo} alt="Logo" className="barcode-logo" />
              <img src={infoLogo} alt="Logo" className="info-logo" />
            </div>
          </div>
          <div className="product-item-body">
            <img
              src={productPlaceholder}
              alt={product.name}
              className="product-item-image"
            />
            <div className="product-item-info">
              <div className="product-item-details">
                <div className="product-item-detail">
                  <span className="label">Base:</span>
                  {product.base || 'N/A'}
                </div>
                <div className="product-item-detail">
                  <span className="label">Estoque:</span>{' '}
                  {product.quantityAvailable || '0'} un
                </div>
                <div className="product-item-quantity">
                  <div className="product-item-detail">
                    <span className="label">Quantidade (un):</span>
                  </div>
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
                <div className="product-item-detail">
                  <span className="label">Valor:</span> R$:
                  {product.price?.finalPrice || 0}
                </div>
                <img
                  src={deleteIcon}
                  alt="Delete"
                  className="delete-icon"
                  onClick={() => removeFromCart(product.id)}
                />
              </div>
            </div>
          </div>
          <div className="product-item-footer">
            <button className="footer-button">Similares</button>
            <button className="footer-button">{product.maker}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
