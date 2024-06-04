import React from 'react';

const Checkout = ({ cart }) => {
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <h3>Total: {total}</h3>
      <button onClick={() => alert('Pedido enviado!')}>Enviar Pedido</button>
    </div>
  );
};

export default Checkout;
