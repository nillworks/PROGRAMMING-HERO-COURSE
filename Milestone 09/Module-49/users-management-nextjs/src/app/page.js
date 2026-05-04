import getProductData from '@/lib/getProductData';

export default async function Home() {
  const product = await getProductData();
  console.log(product);

  return (
    <div>
      {product.map(pro => (
        <p key={pro.id}>{pro.name}</p>
      ))}
    </div>
  );
}
