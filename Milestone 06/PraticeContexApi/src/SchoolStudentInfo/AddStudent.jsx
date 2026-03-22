import { useState } from 'react';

const AddStudent = ({ addedNewStudent }) => {
  const [UserLint, setUserList] = useState({
    name: '',
    class: '',
    gender: '',
  });

  // Store Name
  const studentNameStore = event => {
    const { name, value } = event.target;
    setUserList(prev => ({ ...prev, [name]: value }));
  };

  // add User
  const handleUserSubmit = event => {
    event.preventDefault();

    const newStudent = {
      ...UserLint,
      id: crypto.randomUUID(),
      roll: UserLint.length + 1,
    };

    addedNewStudent(newStudent);
    setUserList({ name: '', class: '', gender: '' });
  };

  return (
    <form
      onSubmit={handleUserSubmit}
      className="flex items-center justify-center px-2 py-10 bg-gray-100"
    >
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Add User
        </h2>

        {/* Flex column for inputs */}
        <div className="flex flex-col gap-4">
          <input
            name="name"
            value={UserLint.name}
            onChange={studentNameStore}
            type="text"
            placeholder="Enter Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700"
          />

          <input
            value={UserLint.class}
            onChange={studentNameStore}
            name="class"
            type="text"
            placeholder="Enter Class"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700"
          />

          <select
            value={UserLint.gender}
            onChange={studentNameStore}
            name="gender"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Add User
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddStudent;
