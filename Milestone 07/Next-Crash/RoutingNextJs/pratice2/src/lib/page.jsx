const getAllUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('There was an error fetching user data !');
  }
  return res.json();
};

export default getAllUsers;
