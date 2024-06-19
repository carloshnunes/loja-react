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

  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
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
              <p>Selecione a forma de pagamento desejada:</p>
              <select id="payment-method">
                <option value="boleto">Boleto</option>
                <option value="pix">Pix</option>
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
    </div>
  );
};

export default CheckoutPage;
