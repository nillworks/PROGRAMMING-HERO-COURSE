import { Trash } from 'lucide-react';

const User = ({ UserData, handleDelete }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 items-center justify-center py-10 text-white sm:grid-cols-3 mx-auto">
        {UserData.map(item => (
          <div className="bg-orange-500 max-w-max px-10" key={item.id}>
            <h2>{item.id}</h2>
            <p>{item.name}</p>
            <button
              onClick={() => handleDelete(item.id)}
              className="cursor-pointer text-red-600"
            >
              <Trash />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default User;
