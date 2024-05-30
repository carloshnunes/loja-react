import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Home from "./pages/Home";
import ShoppingCartPage from "./pages/ShoppingCartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={ShoppingCartPage} />
      </Routes>
    </Router>
  );
}

export default App;
