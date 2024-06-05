import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Checkout from '../components/Checkout';

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout</h1>
      <Checkout cart={cart} />
    </div>
  );
};

export default CheckoutPage;
