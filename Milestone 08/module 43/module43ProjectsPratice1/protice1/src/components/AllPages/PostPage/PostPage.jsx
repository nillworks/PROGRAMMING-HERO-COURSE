import getPostData from '@/lib/getPostData';

const PostPage = async () => {
  const postData = await getPostData();
  console.log(postData);
  return (
    <div>
      <h2>Post Length : {postData.length}</h2>
    </div>
  );
};

export default PostPage;
