import React from 'react';
import './Checkout.css';

const Checkout = ({ cart = [] }) => {
  const total = cart.reduce(
    (acc, product) => acc + (product.price?.finalPrice || 0),
    0
  );

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-items">
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <h3>{item.name}</h3>
            <p>Price: {item.price?.finalPrice || 0} R$</p>
          </div>
        ))}
      </div>
      <h3 className="checkout-total">Total: {total.toFixed(2)} USD</h3>
      <button
        className="checkout-button"
        onClick={() => alert('Pedido enviado!')}
      >
        Enviar Pedido
      </button>
    </div>
  );
};

export default Checkout;
