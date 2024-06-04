import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
      <h2>Total: {total}</h2>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
