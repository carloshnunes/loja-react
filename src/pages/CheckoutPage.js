import React, { useContext } from 'react';
import { CartContext, totalFromCart } from '../context/CartContext';
import Checkout from '../components/Checkout';
import './CheckoutPage.css'; // Importando o CSS para a página

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-details">
        <div className="checkout-section">
          {/* Opções de pagamento */}
          <h2 className="titles-checkout">Opção de Pagamento</h2>
          <p>O valor total dos produtos é de R$ 460,00 (com impostos).</p>
          <label htmlFor="payment-method"></label>
          <select id="payment-method">
            <option value="">Selecione a forma de pagamento</option>
            <option value="boleto">Boleto</option>
          </select>
        </div>
        <div className="checkout-section">
          <h2 className="titles-checkout">Endereço de Entrega</h2>
          <p>Rua Lauro Linhares, Nº390</p>
          <p>Florianópolis - SC / 88130-000</p>
        </div>
        <div className="checkout-section">
          <h2 className="titles-checkout">Informações Adicionais</h2>
          <p>Favor entregar o pedido no período matutino.</p>
        </div>
      </div>
      <div className="checkout-sidebar">
        <h2>Resumo da Compra</h2>
        <p>Total (sem impostos): R${totalFromCart(cart)}</p>
        <p>Impostos: R$ 10,00</p>
        <p>
          <strong>{cart}</strong>
        </p>
        <button className="submit-order">Enviar Pedido{Checkout}</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
