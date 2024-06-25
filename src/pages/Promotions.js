import React from 'react';
import './Promotions.css';

const Promotions = () => {
  return (
    <div className="promotions-container">
      <h1 className="promotions-header">Promoções</h1>
      <p>Confira nossas ofertas especiais!</p>
      <div className="promotions-list">
        <div className="promotion-item">
          <h2 className="promotion-title">Produto 1</h2>
          <p className="promotion-description">Descrição do produto 1.</p>
        </div>
        <div className="promotion-item">
          <h2 className="promotion-title">Produto 2</h2>
          <p className="promotion-description">Descrição do produto 2.</p>
        </div>
        {/* Adicione mais itens conforme necessário */}
      </div>
    </div>
  );
};

export default Promotions;
