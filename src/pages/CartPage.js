import React, { useContext } from 'react';
import { CartContext, totalFromCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  function groupProductsById(cart) {
    const grouped = cart.reduce((acc, product) => {
      if (!acc[product.id]) {
        acc[product.id] = {
          id: product.id,
          name: product.name,
          price: product?.price.finalPrice || 0,
          count: 0,
        };
      }
      acc[product.id].count += 1;
      return acc;
    }, {});

    return Object.values(grouped);
  }

  const groupedCart = groupProductsById(cart);
  console.log(groupedCart, 'groupedCart');

  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="cart-page">
      <div className="menu-header-carrinho">
        <button className="botao-header-voltar">Voltar</button>
        <button className="botao-header-pagamento">Ir para pagamento</button>
        <button className="botao-header-limpar">Limpar carrinho</button>
      </div>
      <div className="cart-container">
        <div className="cart-summary">
          {groupedCart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <h2 className="h2-titulo-carrinho">PRODUTOS</h2>
                <h3>{item.name}</h3>
                <p></p>
                <div className="cart-item-quantity">
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                </div>
                <p></p>
              </div>
              <p>
                {item.count} un - {formatCurrency(item.price * item.count)}
              </p>
            </div>
          ))}
        </div>
        <div className="sidebar-carrinho">
          <h3 className="h3-sidebar-carrinho">VALORES</h3>
          <div className="total-sem-impostos">
            <p>Total sem impostos</p>
            <p>R$: {formatCurrency(totalFromCart(cart))}</p>
            <p>Impostos</p>
            <p>R$: 10,00</p>
          </div>
          <p>Total:</p>
        </div>
      </div>

      <div className="user-info">
        <h3>Informações do Usuário</h3>
        <p>Nome: João Silva</p>
        <p>Email: joao.silva@example.com</p>
        <p>Endereço: Rua Exemplo, 123</p>
      </div>
    </div>
  );
};

export default CartPage;
