import getStudentData from '@/lib/getStudentData';
import Link from 'next/link';

const StudentPage = async () => {
  const student = await getStudentData();

  return (
    <main className="min-h-screen bg-slate-100 px-4 sm:px-6 md:px-10 py-10">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto mb-8 gap-4">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
          Student List
        </h1>

        {/* Add Button */}
        <Link
          href="/add-student"
          className="bg-sky-500 text-white px-5 py-2 rounded-md hover:bg-sky-600 transition text-sm sm:text-base"
        >
          + Add Student
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {student?.studentsData?.map(student => (
          <div
            key={student.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-5"
          >
            <h2 className="text-lg font-semibold text-slate-800">
              {student.name}
            </h2>

            <p className="text-slate-600 mt-1">
              Department:{' '}
              <span className="font-medium">{student.department}</span>
            </p>

            <p className="text-slate-600">
              Age: <span className="font-medium">{student.age}</span>
            </p>

            {/* Badge */}
            <div className="mt-3">
              <span className="inline-block bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-xs">
                ID: {student.id}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default StudentPage;
