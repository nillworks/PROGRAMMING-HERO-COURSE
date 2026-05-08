import getUserDetailsData from '@/lib/getUserDetailsData';
import updateUserData from '@/lib/updateUserData';
import { Button, Input, Label, TextField } from '@heroui/react';

const EditPage = async ({ params }) => {
  const { id } = await params;
  const data = await getUserDetailsData(id);
  console.log(data);

  const updateUserWrapper = async fromData => {
    'use server';
    return updateUserData(id, fromData);
  };

  return (
    <div className="w-1/2 mx-auto mt-10 shadow px-3 py-2 rounded-lg">
      <form action={updateUserWrapper} className=" space-y-3 px-2">
        {/* Name */}
        <TextField name="name" defaultValue={`${data.name}`} type="text">
          <Label>Name</Label>
          <Input placeholder="Enter full name" />
        </TextField>

        {/* Email */}
        <TextField name="email" defaultValue={`${data.email}`} type="email">
          <Label>Email</Label>
          <Input placeholder="Enter email" />
        </TextField>

        {/* Role */}
        <TextField name="role" defaultValue={`${data.role}`} type="text">
          <Label>Role</Label>
          <Input placeholder="Frontend Developer" />
        </TextField>

        {/* Age */}
        <TextField name="age" defaultValue={`${data.age}`} type="number">
          <Label>Age</Label>
          <Input placeholder="22" />
        </TextField>

        <div className="flex items-center gap-2 justify-end">
          <Button slot="close" variant="secondary">
            Cancel
          </Button>

          <Button type="submit" slot="close" color="primary">
            Add User
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
