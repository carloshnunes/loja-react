import React, { useContext } from 'react';
import { CartContext, totalFromCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cart } = useContext(CartContext);

  function groupProductsById(cart) {
    const grouped = cart.reduce((acc, product) => {
      if (!acc[product.id]) {
        acc[product.id] = {
          id: product.id,
          name: product.name,
          price: product?.price.finalPrice || 0,
          count: 0,
        };
      }
      acc[product.id].count += 1;
      return acc;
    }, {});

    return Object.values(grouped);
  }
  const groupedCart = groupProductsById(cart);
  console.log(groupedCart, 'groupedCart');

  return (
    <div className="cart-page">
      <h2>Seu Carrinho</h2>
      {groupedCart.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p>
              {item.count} un - R$ {item.price * item.count}
            </p>
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
