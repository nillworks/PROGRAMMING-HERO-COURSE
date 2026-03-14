import { use } from 'react';

const PostList = ({ data }) => {
  const dataPost = use(data);
  console.log(dataPost);
  return <div>app</div>;
};

export default PostList;
