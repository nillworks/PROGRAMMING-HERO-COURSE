const getUsersData = async () => {
  const res = await fetch('http://localhost:8000/users');
  return res.json();
};

export default getUsersData;
