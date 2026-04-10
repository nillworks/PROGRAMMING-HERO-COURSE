import getFoodData from '@/lib/getFoodData';
import SingleFoodCard from '@/AllPages/Menu/SingleFoodCard';
import { Suspense } from 'react';

const singlePageFood = async ({ params }) => {
  const { foodId } = await params;
  const expectedDataFoods = await getFoodData(foodId);

  return (
    <div>
      <Suspense fallback={<h4>Loading Single Page Food Data ...</h4>}>
        <SingleFoodCard expectedDataFoods={expectedDataFoods} />
      </Suspense>
    </div>
  );
};

export default singlePageFood;
