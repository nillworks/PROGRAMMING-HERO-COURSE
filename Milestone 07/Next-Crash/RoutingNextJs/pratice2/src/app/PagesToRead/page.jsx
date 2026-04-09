import Image from 'next/image';
import logo from '../../../public/images/shipon-roy-image.jpg';
import getAllUsers from '@/lib/page';

const PagesToReadPage = async () => {
  const userData = await getAllUsers();

  console.log(userData);

  return (
    <div>
      <Image
        className="sm:w-96"
        placeholder="blur"
        src={logo}
        alt="image"
      ></Image>
    </div>
  );
};

export default PagesToReadPage;
