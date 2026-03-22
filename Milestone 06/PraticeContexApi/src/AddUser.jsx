import { useState } from 'react';

const AddUser = ({ handleUserData }) => {
  const [userName, setUserName] = useState('');

  const handleUserName = event => {
    setUserName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newUser = { id: Date.now(), name: userName };
    handleUserData(newUser);
    setUserName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <div className=" flex items-center flex-col justify-center">
          <div className="bg-white shadow-lg rounded-2xl p-6 w-80">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">
              Add User
            </h2>

            <input
              value={userName}
              onChange={handleUserName}
              type="text"
              placeholder="Enter Your Name"
              className="w-full text-black px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="submit"
              value="Submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg cursor-pointer hover:bg-orange-600 transition duration-300"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
