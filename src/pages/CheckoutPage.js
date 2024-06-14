import React, { useContext } from 'react';
import { CartContext, totalFromCart } from '../context/CartContext';
import Checkout from '../components/Checkout';
import './CheckoutPage.css'; // Importando o CSS para a página
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);

  const calculateTotalWithTax = (cart, tax) => {
    const total = totalFromCart(cart);
    return parseFloat(total) + parseFloat(tax);
  };

  const TAX_AMOUNT = 10.0;

  return (
    <div className="checkout-container">
      <div className="menu-header-checkout">
        <Link to="/">
          <button className="botao-header-voltar">⬅ VOLTAR</button>
        </Link>
        <button className="botao-header-pedido" onClick={Checkout}>
          ENVIAR PEDIDO ⭢
        </button>
      </div>
      <div className="checkout-main">
        <div className="checkout-details">
          <div className="checkout-section">
            <h2 className="titles-checkout">OPÇÃO DE PAGAMENTO</h2>
            <p>
              O valor total dos produtos é de :R$
              {calculateTotalWithTax(cart, TAX_AMOUNT).toFixed(2)} (com
              impostos).
            </p>
            <div className="payment-bar">
              <p>Selecione a forma de pagamento:</p>
              <label htmlFor="payment-method"></label>
              <select id="payment-method">
                <option value="">Selecione a forma de pagamento</option>
                <option value="boleto">Boleto</option>
              </select>
            </div>
            <button className="botao-boleto">Boleto</button>
          </div>
          <div className="checkout-section">
            <h2 className="titles-checkout">ENDEREÇO DE ENTREGA</h2>
            <p>Rua Lauro Linhares, Nº390</p>
            <p>Florianópolis - SC / 88130-000</p>
          </div>
          <div className="checkout-section">
            <h2 className="titles-checkout">INFORMAÇÕES ADICIONAIS</h2>
            <p>Favor entregar o pedido no período matutino.</p>
          </div>
        </div>
        <div className="checkout-sidebar">
          <h2 className="checkout-sidebar-header">VALORES</h2>
          <div className="content-sidebar-checkout">
            <p>Total (sem impostos): R${totalFromCart(cart)}</p>
            <p>Impostos: R$ {TAX_AMOUNT.toFixed(2)}</p>
          </div>
          <div className="total-sidebar-checkout">
            Total: {calculateTotalWithTax(cart, TAX_AMOUNT).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
