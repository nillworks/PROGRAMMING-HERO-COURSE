const getFoodData = async id => {
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${id}`,
  );
  return res.json();
};

export default getFoodData;
