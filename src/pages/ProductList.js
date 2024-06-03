import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://nexfar-static-public.s3-sa-east-1.amazonaws.com/j-application/products.json',
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched products:', data); // Adicionado para depuração
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>O que será que eu escrevo aqui</h1>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              {product.name}
              <button onClick={() => addToCart(product)}>
                Adicionar ao Carrinho
              </button>
            </li>
          ))
        ) : (
          <p>Carregando produtos...</p>
        )}
      </ul>
    </div>
  );
}

export default ProductList;
