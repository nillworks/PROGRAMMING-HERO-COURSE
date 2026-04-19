const getProductData = async () => {
  const res = await fetch('http://localhost:3004/products', {
    next: { revalidate: 10 },
  });
  return res.json();
};

export default getProductData;
