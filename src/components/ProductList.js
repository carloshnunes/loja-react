import React, { useState } from 'react';
import './ProductList.css'; // Certifique-se de criar e importar o CSS

const ProductList = ({ addToCart, removeFromCart, products, cart }) => {
  const [productList, setProductList] = useState(products);

  console.log(cart);

  return (
    <div className="product-list">
      {productList.map((product) => (
        <div key={product.id} className="product-item">
          <h2>{product.name}</h2>
          <p>{product.price?.finalPrice || 0} USD</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <button onClick={() => removeFromCart(product.id)}>
            Remove From Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
