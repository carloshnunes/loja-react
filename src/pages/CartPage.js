import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>
            Remove from Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
