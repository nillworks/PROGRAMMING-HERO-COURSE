import getUserDetailsData from '@/lib/getUserDetailsData';
import { Card, Chip } from '@heroui/react';
import { Mail, MapPin, BadgeCheck, Hash } from 'lucide-react';

const UserDetailsPage = async ({ params }) => {
  const { id } = await params;
  const exUser = await getUserDetailsData(id);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <Card className="w-full max-w-xl shadow-2xl rounded-3xl p-8">
        {/* Header */}
        <div className="text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
            {exUser?.name?.charAt(0)}
          </div>

          <h1 className="text-3xl font-bold mt-4 text-gray-800">
            {exUser?.name}
          </h1>

          <Chip color="primary" variant="flat" className="mt-2 capitalize">
            {exUser?.role}
          </Chip>
        </div>

        {/* User Info */}
        <div className="space-y-4 mt-8">
          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
            <Hash className="text-blue-500" size={20} />
            <div>
              <p className="text-sm text-gray-500">Age</p>
              <p className="font-semibold text-gray-800">{exUser?.age}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
            <Mail className="text-green-500" size={20} />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-semibold text-gray-800">{exUser?.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
            <MapPin className="text-red-500" size={20} />
            <div>
              <p className="text-sm text-gray-500">City</p>
              <p className="font-semibold text-gray-800">{exUser?.city}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
            <BadgeCheck className="text-purple-500" size={20} />
            <div>
              <p className="text-sm text-gray-500">User ID</p>
              <p className="font-semibold text-gray-800 break-all">
                {exUser?._id}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserDetailsPage;
