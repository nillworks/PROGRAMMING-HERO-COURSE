import { Suspense } from 'react';
import Albums from './Albums';

const Users = () => {
  const fetchData = fetch('https://jsonplaceholder.typicode.com/albums').then(
    res => res.json(),
  );
  return (
    <div>
      <Suspense fallback={<p>loading Albums Data ....</p>}>
        <Albums data={fetchData} />
      </Suspense>
    </div>
  );
};

export default Users;
