const getFoodsData = async () => {
  const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods');
  return res.json();
};
export default getFoodsData;
