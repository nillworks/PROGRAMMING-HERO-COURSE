import { use } from 'react';
import Cards from './Cards';

const Menu = ({ menuData }) => {
  const usePrams = use(menuData);
  console.log(usePrams);

  return (
    <div className="py-20 px-4">
      <h1 className="text-4xl text-center">This is Menu Page</h1>

      <div className="border border-t-fuchsia-600 flex flex-col gap-4 rounded-lg px-4 py-3">
        {usePrams.map(item => (
          <Cards key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
