import React from "react";
const pricingLabel = (option) => {
  if (option === 0) return "Free";
  if (option === 1) return "Paid";
  if (option === 2) return "View Only";
  return "";
};

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imagePath} alt={product.title} />
      <h3>{product.creator}</h3>
      <h3 className="title">{product.title}</h3>

      {product.pricingOption === 1 ? (
        <p className="price">${product.price}</p>
      ) : (
        <p className="option">{pricingLabel(product.pricingOption)}</p>
      )}
    </div>
  );
}
