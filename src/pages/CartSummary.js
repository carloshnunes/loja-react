import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function CartSummary() {
  const { cart, getTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div>
      <h1>Resumo do Carrinho</h1>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - Quantidade: {item.quantity} - Preço: R$
                {item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p>Total: R${getTotal().toFixed(2)}</p>
          <button onClick={handleCheckout}>Ir para Pagamento</button>
          <button onClick={clearCart}>Limpar Carrinho</button>
        </>
      ) : (
        <p>O carrinho está vazio</p>
      )}
    </div>
  );
}

export default CartSummary;
