import React from "react";

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price.toFixed(2)}
            <button onClick={() => onAddToCart(product)}>
              Adicionar ao Carrinho
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
