import getFoodsData from '@/lib/getFoodsData';
import Menu from '@/AllPages/Menu/Menu';
import { Suspense } from 'react';

const MenuPage = async () => {
  const promiseFoodData = getFoodsData();

  return (
    <section className="containers px-3 py-5">
      <Suspense fallback={<h2>loading ....</h2>}>
        <Menu promiseFoodData={promiseFoodData} />
      </Suspense>
    </section>
  );
};

export default MenuPage;
