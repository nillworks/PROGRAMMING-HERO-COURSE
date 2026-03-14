import { use } from 'react';
import PostRow from './PostRow';

const PostList = ({ data }) => {
  const dataPost = use(data);
  // console.log(dataPost);
  return (
    <div>
      {dataPost.map(item => (
        <li className="p-4 shadow space-y-1" key={item.id}>
          {item.title}
        </li>
      ))}
    </div>
  );
};

export default PostList;
