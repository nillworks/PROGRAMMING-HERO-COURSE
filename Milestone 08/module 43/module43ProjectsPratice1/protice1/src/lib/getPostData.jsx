const getPostData = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    next: { revalidate: 20 },
  });
  return res.json();
};

export default getPostData;
