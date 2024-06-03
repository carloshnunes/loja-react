import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ShoppingCart() {
  const { cart, removeFromCart, calculateTotal } = useContext(CartContext);

  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <h2>Total: {calculateTotal()}</h2>
    </div>
  );
}

export default ShoppingCart;
