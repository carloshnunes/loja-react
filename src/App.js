import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Promotions from './pages/Promotions'; // Importe o novo componente
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <div className="main-layout">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/promotions" element={<Promotions />} />{' '}
              {/* Corrija a rota */}
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
