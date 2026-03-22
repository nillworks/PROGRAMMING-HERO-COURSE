import { useState } from 'react';
import User from './User';
import AddUser from './AddUser';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Shipon Roy' },
    { id: 2, name: 'nill Roy' },
  ]);

  const handleDelete = id => {
    const filterUser = users.filter(user => user.id !== id);

    setUsers(filterUser);
  };

  const handleUserData = Newuser => {
    setUsers(prev => [...prev, Newuser]);
  };

  return (
    <div>
      <User UserData={users} handleDelete={handleDelete} />
      <AddUser handleUserData={handleUserData} />
    </div>
  );
};

export default Users;
