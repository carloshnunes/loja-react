import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const removeFirstInstance = (array, id) => {
  let removed = false;
  return array.filter((item) => {
    if (item.id === id && !removed) {
      removed = true;
      return false;
    }
    return true;
  });
};

const totalFromCart = (cart) => {
  let totalCartValue = 0;
  for (let item of cart) {
    const itemPrice = item.price?.finalPrice || 0;
    totalCartValue = totalCartValue + itemPrice;
  }
  return totalCartValue > 0 ? totalCartValue.toFixed(2) : totalCartValue;
};

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_ALL_FROM_CART':
      return state.filter((item) => item.id !== action.payload);
    case 'REMOVE_FROM_CART':
      return removeFirstInstance(state, action.payload);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartContext, totalFromCart };
export default CartProvider;
