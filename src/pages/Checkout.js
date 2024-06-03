import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Checkout() {
  const { cart, getTotal } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout</h1>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - Quantidade: {item.quantity} - Preço: R$
                {item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p>Total: R${getTotal().toFixed(2)}</p>
          <button>Enviar Pedido</button>
        </>
      ) : (
        <p>O carrinho está vazio</p>
      )}
    </div>
  );
}

export default Checkout;
