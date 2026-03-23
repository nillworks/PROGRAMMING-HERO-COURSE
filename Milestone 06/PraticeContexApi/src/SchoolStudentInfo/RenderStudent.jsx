import StudentContext from '../Context/StudentContext';
import UseStudentsContext from './../Hooks/UseStudentsContext';

const RenderStudent = () => {
  // Use Student User Context ||
  const { student, setStudent } = UseStudentsContext();

  // Deletes User
  const onHandleUserDeletes = id => {
    const filterUser = student.filter(stu => stu.id !== id);
    setStudent(filterUser);
  };

  // Render User
  return (
    <div className="p-6 bg-gray-100 min-h-screen containers">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">
        Student List
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {student.map(student => (
          <div
            key={student.id}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-2 text-gray-700 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-lg font-semibold">Name: {student.name}</h2>
            <h2 className="text-md">Class: {student.class}</h2>
            <h2 className="text-md">Gender: {student.gender}</h2>

            {/* Delete Button Design */}
            <button
              onClick={() => onHandleUserDeletes(student.id)}
              className=" cursor-pointer bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-colors duration-300"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderStudent;
