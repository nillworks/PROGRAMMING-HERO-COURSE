import getProductData from '@/lib/getProductData';

export const generateStaticParams = async () => {
  const data = await getProductData();

  return data.map(item => ({ bookId: item.id }));
};

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const productData = await getProductData();
  const ex = productData.find(item => item.id === id);

  console.log(ex);

  return (
    <div>
      <h2>title: {ex.title}</h2>
      <h3>Author: {ex.category}</h3>
    </div>
  );
};

export default DetailsPage;
