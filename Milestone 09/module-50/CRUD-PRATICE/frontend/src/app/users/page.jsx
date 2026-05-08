import AddUserModal from '@/components/AddUserModal';
import UsersList from '@/components/UsersList';
import deleteUserData from '@/lib/deleteUserData';
import getUsersData from '@/lib/getUsersData';

const UserPage = async () => {
  const userData = await getUsersData();
  const data = userData?.allUsersData;
  return (
    <div>
      <div className="flex items-center justify-between px-4">
        <h2 className="text-center pt-10">User Table</h2>
        <AddUserModal />
      </div>

      <UsersList userData={data} deleteUserData={deleteUserData} />
    </div>
  );
};

export default UserPage;
