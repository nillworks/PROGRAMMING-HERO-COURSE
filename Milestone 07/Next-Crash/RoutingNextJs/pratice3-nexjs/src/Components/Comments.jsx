const Comments = async ({ promise }) => {
  const { name, body } = await promise;

  return (
    <div className="space-y-1">
      <h2 className="text-lg font-bold">{name}</h2>
      <h2 className="text-lg">{body}</h2>
    </div>
  );
};

export default Comments;
