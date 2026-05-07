import UsersList from '@/components/UsersList';
import deleteUserData from '@/lib/deleteUserData';
import getUsersData from '@/lib/getUsersData';

const UserPage = async () => {
  const userData = await getUsersData();
  const data = userData?.allUsersData;
  return (
    <div>
      <UsersList userData={data} deleteUserData={deleteUserData} />
    </div>
  );
};

export default UserPage;
