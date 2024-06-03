import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const { removeFromCart, calculateTotal } = useContext(CartContext);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(
          'https://nexfar-static-public.s3-sa-east-1.amazonaws.com/j-application/shoppingCart.json',
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCart(data);
      } catch (error) {
        console.error('Failed to fetch cart:', error);
      }
    };

    fetchCart();
  }, []);

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
