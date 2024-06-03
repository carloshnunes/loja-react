import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
