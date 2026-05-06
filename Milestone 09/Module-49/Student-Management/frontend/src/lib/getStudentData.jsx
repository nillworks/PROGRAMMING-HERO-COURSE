const getStudentData = async () => {
  const res = await fetch('http://localhost:8000/studentInfo');
  return res.json();
};

export default getStudentData;
