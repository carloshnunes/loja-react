import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/" component={ProductList} />
      </Switch>
    </Router>
  );
}

export default App;
