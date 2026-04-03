import { useLoaderData } from 'react-router';

const Users = () => {
  const userId = useLoaderData();
  const { title, body } = userId;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition duration-300">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        <span className="text-blue-600 capitalize">{title}</span>
      </h2>

      <p className="text-gray-600 text-sm leading-relaxed">📝{body}</p>
    </div>
  );
};

export default Users;
