const getComments = async id => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`,
  );
  return res.json();
};

export default getComments;
