import { Suspense } from 'react';
import PostList from './PostList';

const fetchDataPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

const Users = () => {
  const postData = fetchDataPost();

  return (
    <div>
      <Suspense fallback={<p>loading data ....</p>}>
        <PostList data={postData} />
      </Suspense>
    </div>
  );
};

export default Users;
