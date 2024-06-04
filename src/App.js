import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
