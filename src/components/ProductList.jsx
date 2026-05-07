import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <p className="no-products-found">No products found.</p>;
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;