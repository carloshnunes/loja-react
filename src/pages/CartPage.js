import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  console.log('Cart contents:', cart);

  return (
    <div className="cart-page">
      {cart.length === 0 ? (
        <p className="empty-cart-message">The cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h2 className="cart-item-name">{item.name}</h2>
              <p className="cart-item-price">
                {item.price && item.price.finalPrice
                  ? item.price.finalPrice
                  : 0}
              </p>
              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
