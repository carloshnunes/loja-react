import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart
    .reduce((acc, product) => acc + product.price, 0)
    .toFixed(2);

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price.toFixed(2)} USD</p> {}
          <button onClick={() => removeFromCart(product.id)}>Remove</button> {}
        </div>
      ))}
      <h2>Total: {total} USD</h2> {}
    </div>
  );
};

export default CartPage;
