const getBooksData = async () => {
  const res = await fetch('http://localhost:8000/books');
  return res.json();
};

export default getBooksData;
