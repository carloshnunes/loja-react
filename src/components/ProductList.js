import React, { useState } from 'react';

const ProductList = ({ addToCart, removeFromCart, products }) => {
  const [productList, setProductList] = useState(products);

  return (
    <div>
      {productList.map((product) => (
        <div key={product.id}>
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
