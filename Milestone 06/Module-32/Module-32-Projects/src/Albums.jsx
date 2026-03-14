import { use } from 'react';
import AlbumsDetails from './AlbumsDetails';

const Albums = ({ data }) => {
  const useDataAlbums = use(data);
  console.log(useDataAlbums);
  return (
    <div className="shadow">
      {useDataAlbums.map(item => (
        <AlbumsDetails key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Albums;
