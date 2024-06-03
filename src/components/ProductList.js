import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(
      'https://nexfar-static-public.s3-sa-east-1.amazonaws.com/j-application/products.json',
    )
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => addToCart(product)}>
              Adicionar ao Carrinho
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
