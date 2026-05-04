const getProductData = async () => {
  const res = await fetch('http://localhost:8000/product');
  return res.json();
};

export default getProductData;
