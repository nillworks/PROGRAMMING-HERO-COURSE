import Comments from '@/Components/Comments';
import getComments from '@/lib/getComments';
import getUserData from '@/lib/getUserData';
import { Suspense } from 'react';

// Dynamic Meta Data Render
export async function generateMetadata({ params }) {
  const { id } = await params;

  const pro = await getUserData(id);
  const { name, title } = pro;

  return {
    title: name,
    description: title,
  };
}

const UserDetails = async ({ params }) => {
  const { id } = await params;

  // Single User Data
  const pro = await getUserData(id);
  const { name, website, email } = pro;

  // Single Comments Data
  const promise = getComments(id);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 space-y-4 text-center">
        <h2 className="text-2xl font-bold">👤 {name}</h2>

        <p className="text-gray-700">📧 {email}</p>

        <a
          href={`https://${website}`}
          target="_blank"
          className="text-blue-500 hover:underline break-all"
        >
          🌐 {website}
        </a>

        <button className="btn btn-success w-full text-white mt-3">
          Contact
        </button>
      </div>

      <div>
        <Suspense fallback={<h4>loading ...</h4>}>
          <Comments promise={promise} />
        </Suspense>
      </div>
    </div>
  );
};

export default UserDetails;
