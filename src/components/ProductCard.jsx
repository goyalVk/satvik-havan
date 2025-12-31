import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card glow scale">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      {/* Order button intentionally removed */}
    </div>
  );
};

export default ProductCard;
