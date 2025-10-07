import React from "react";
import ProductCard from "./ProductCard";

import "../../styles/Products.less";

export default function ProductsList({ products }) {

  return (
    <>
      <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  )
}
