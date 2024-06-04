import React, { useState } from 'react';
import Checkout from '../components/Checkout';

const CheckoutPage = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <h1>Checkout</h1>
      <Checkout cart={cart} />
    </div>
  );
};

export default CheckoutPage;
