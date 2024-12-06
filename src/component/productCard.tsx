
import React from "react";

export const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.thumbnail} alt={product.name} />
    <h3>{product.name}</h3>
    <p>${product.price}</p>
    <p>{product.description}</p>
  </div>
);
