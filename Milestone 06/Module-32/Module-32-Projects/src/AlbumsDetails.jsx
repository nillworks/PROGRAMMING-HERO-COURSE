const AlbumsDetails = ({ item }) => {
  return (
    <div className="space-y-4 shadow py-4">
      <li>{item.userId}</li>
      <li>{item.title}</li>
      <li>{item?.body ? item.body : 'N/A'}</li>
    </div>
  );
};

export default AlbumsDetails;
