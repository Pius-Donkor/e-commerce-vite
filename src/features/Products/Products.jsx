/* eslint-disable react/prop-types */

import ProductCard from "./ProductCard";

export default function Products({ products }) {
    
  return (
    <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard product={product} key={product.product_id} />
      ))}
    </div>
  );
}
