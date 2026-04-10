import MenuCard from './MenuCard';

const Menu = async ({ promiseFoodData }) => {
  const newPromise = await promiseFoodData;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 items-stretch">
      {newPromise.data.map(food => (
        <MenuCard key={food.id} food={food} />
      ))}
    </div>
  );
};

export default Menu;
