import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Checkout from '../components/Checkout';
import './CheckoutPage.css'; // Importando o CSS para a página

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-details">
        <div className="checkout-section">
          {/* Opções de pagamento */}
          <h2>Opções de Pagamento</h2>
          {/* Aqui você pode adicionar seus campos para opções de pagamento */}
        </div>
        <div className="checkout-section">
          {/* Endereço de entrega */}
          <h2>Endereço de Entrega</h2>
          {/* Campos para endereço de entrega */}
        </div>
        <div className="checkout-section">
          {/* Informações adicionais */}
          <h2>Informações Adicionais</h2>
          {/* Campos para informações adicionais */}
        </div>
        <div className="checkout-summary">
          <h1>Checkout</h1>
          <Checkout cart={cart} />
        </div>
      </div>
      <div className="checkout-sidebar">
        {/* Barra lateral com o valor total da compra */}

        <h2>Resumo da Compra</h2>
        {/* Aqui você pode mostrar o resumo da compra, como o subtotal, impostos, e o total */}
      </div>
    </div>
  );
};

export default CheckoutPage;
