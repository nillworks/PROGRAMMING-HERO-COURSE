const getUserDetailsData = async userId => {
  const res = await fetch(`http://localhost:8000/users/${userId}`);
  return res.json();
};

export default getUserDetailsData;
