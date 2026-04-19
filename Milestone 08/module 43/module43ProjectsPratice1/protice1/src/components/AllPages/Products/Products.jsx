import getProductData from '@/lib/getProductData';
import ProductCard from './ProductCard';

const Products = async () => {
  const productData = await getProductData();

  return (
    <div>
      <h2>
        Products Data length:{' '}
        <span className="text-4xl font-medium">{productData.length}</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productData.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </h2>
    </div>
  );
};

export default Products;
