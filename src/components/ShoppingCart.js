import React from "react";

const ShoppingCart = ({ cart, onRemoveFromCart, total }) => {
  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - R$ {item.price.toFixed(2)}
            <button onClick={() => onRemoveFromCart(item)}>
              Remover do Carrinho
            </button>
          </li>
        ))}
      </ul>
      <p>Total: R$ {total.toFixed(2)}</p>
    </div>
  );
};

export default ShoppingCart;
