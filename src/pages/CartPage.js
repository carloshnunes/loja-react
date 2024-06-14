import React, { useContext } from 'react';
import { CartContext, totalFromCart } from '../context/CartContext';
import trashIcon from '../components/images/trash.png';
import './CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const groupProductsById = (cart) => {
    return Object.values(
      cart.reduce((acc, product) => {
        if (!acc[product.id]) {
          acc[product.id] = { ...product, count: 0 };
        }
        acc[product.id].count += 1;
        return acc;
      }, {})
    );
  };

  const groupedCart = groupProductsById(cart);

  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="cart-page">
      <div className="menu-header-carrinho">
        <button className="botao-header-voltar">⬅ VOLTAR</button>
        <div>
          <button className="botao-header-pagamento">
            IR PARA PAGAMENTO ⭢
          </button>
          <button className="botao-header-limpar">
            LIMPAR CARRINHO
            <img src={trashIcon} alt="Delete" className="delete-icon" />
          </button>
        </div>
      </div>
      <div className="menus-aba-header">
        <p>RESUMO</p>
        <p>PRODUTOS</p>
        <p>INFORMAÇÕES ADICIONAIS</p>
      </div>
      <div className="cart-container">
        <div className="cart-summary">
          {groupedCart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <h2 className="h2-titulo-carrinho">PRODUTOS</h2>
                <h3>{item.name}</h3>
                <div className="cart-item-quantity">
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                </div>
              </div>
              <p>
                {item.count} un - R$: {formatCurrency(totalFromCart(cart))}
              </p>
            </div>
          ))}
        </div>
        <div className="sidebar-carrinho">
          <h3 className="h3-sidebar-carrinho">VALORES</h3>
          <div className="valores-container">
            <div className="total-sem-impostos">
              <p>Total sem impostos</p>
              <p>R$: {formatCurrency(totalFromCart(cart))}</p>
            </div>
            <div className="impostos">
              <p>Impostos</p>
              <p>R$: 10,00</p>
            </div>
          </div>
          <div className="total">
            <p>Total:R$:</p>
            <p>{formatCurrency(totalFromCart(cart))}</p>
          </div>
        </div>
      </div>
      <div className="user-info">
        <div className="header-user-info">
          <h3>CLIENTE</h3>
          <h3 className="h3-header-user">VER DETALHES</h3>
        </div>
        <p>Nome: João Silva</p>
        <p>Email: joao.silva@example.com</p>
        <p>Endereço: Rua Exemplo, 123</p>
      </div>
    </div>
  );
};

export default CartPage;
