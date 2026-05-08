'use client';

import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import { User } from 'lucide-react';

const AddUserModal = () => {
  const handleFormData = async e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const newUser = {
      name: data.name,
      email: data.email,
      role: data.role,
      age: Number(data.age),
    };

    const req = await fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    const result = await req.json();

    if (result.insertedId) {
      window.location.reload();
    }

    console.log(result);
  };

  return (
    <Modal>
      <Button variant="primary">Add User</Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl rounded-3xl">
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header>
              <Modal.Icon className="bg-blue-100 text-blue-600">
                <User className="size-5" />
              </Modal.Icon>

              <Modal.Heading>Add New User</Modal.Heading>

              <p className="mt-1 text-sm text-gray-500">
                Fill all user information below.
              </p>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="">
              <Surface variant="default" className="rounded-2xl">
                <form onSubmit={handleFormData} className=" space-y-3 px-2">
                  {/* Name */}
                  <TextField name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter full name" />
                  </TextField>

                  {/* Email */}
                  <TextField name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="Enter email" />
                  </TextField>

                  {/* Role */}
                  <TextField name="role" type="text">
                    <Label>Role</Label>
                    <Input placeholder="Frontend Developer" />
                  </TextField>

                  {/* Age */}
                  <TextField name="age" type="number">
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
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default AddUserModal;
