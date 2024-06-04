import React, { useState, useEffect } from 'react';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulando uma requisição assíncrona para buscar os produtos
    const fetchProducts = async () => {
      try {
        // Simulando um pequeno atraso para simular uma requisição assíncrona
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Seus dados de produtos
        const productsData = [
          {
            id: '5fa2999664313a3718a1e0d5',
            sku: 'P00033914',
            name: 'HAAR INTERN C/60CPR-S/AC',
            barcode: '7896202500058',
            maker: 'VITAMED',
            category: 'ALIMENTOS E SUPLEMENTOS',
            principle: 'VITAMINA B7 (BIOTINA)',
            base: 'Nexfar',
            price: 16.92, // price é apenas um número
            quantityAvailable: 99,
            validUntil: 1667228400000,
            imageURL:
              'https://cfarma-public.s3-sa-east-1.amazonaws.com/images/nexfar-product-default-image.jpg',
          },
          // outros produtos aqui...
        ];

        setProducts(productsData); // Definindo os produtos com os dados importados
      } catch (error) {
        setError('Error fetching products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.price.toFixed(2)} USD</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
