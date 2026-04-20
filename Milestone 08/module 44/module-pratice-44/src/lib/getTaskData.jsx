const getTaskData = async () => {
  const res = await fetch('http://localhost:3004/tasks');
  return res.json();
};

export default getTaskData;
