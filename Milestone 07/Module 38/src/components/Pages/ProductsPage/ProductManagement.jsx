import { useState } from 'react';
import ProductFrom from './ProductFrom';
import ProductTable from './ProductTable';

const ProductManagement = () => {
  const [products, setProduct] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const qty = e.target.qty.value;

    const newProducts = {
      id: crypto.randomUUID(),
      name,
      price,
      qty,
    };
    setProduct(prev => [...prev, newProducts]);
    e.target.reset();
  };

  return (
    <div className="container mx-auto">
      <ProductFrom handleSubmit={handleSubmit} />

      <div className=" py-10 grid gap-5 items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(item => (
          <ProductTable key={item.id} products={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductManagement;
