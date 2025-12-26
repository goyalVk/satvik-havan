import React from 'react';

const ProductCard = ({ product }) => {
  const handleOrder = () => {
    const message = `Hi, I want to order ${product.name} for ${product.price}.`;
    window.open(`https://wa.me/918076170877?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="product-card glow scale">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={handleOrder}>Order on WhatsApp</button>
    </div>
  );
};

export default ProductCard;