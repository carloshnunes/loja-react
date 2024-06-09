import React, { useContext } from 'react';
import { CartContext, totalFromCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h2>Seu Carrinho</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p>Preço: R$ {item.price.finalPrice.toFixed(2)}</p>
            <div className="cart-item-quantity">
              <button onClick={() => removeFromCart(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
          </div>
        </div>
      ))}
      <div className="cart-total">
        <h3>Total: R$ {totalFromCart(cart)}</h3>
      </div>
    </div>
  );
};

export default CartPage;
