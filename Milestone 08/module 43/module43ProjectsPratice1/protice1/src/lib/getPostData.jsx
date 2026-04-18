const getPostData = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return res.json();
};

export default getPostData;
