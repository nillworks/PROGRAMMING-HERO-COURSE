'use client';

import { FloppyDisk, Persons } from '@gravity-ui/icons';
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';
import { toast } from '@heroui/react';

const AddStudentPage = () => {
  const onSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const studentInfo = Object.fromEntries(formData.entries());

    // Convert age to number
    const newStudent = {
      name: studentInfo.name,
      age: Number(studentInfo.age),
      department: studentInfo.department,
    };

    const request = await fetch(`http://localhost:8000/studentInfo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(newStudent),
    });
    if (!request.ok) {
      throw new Error('Network response was not ok');
    }

    const response = await request.json();

    console.log('New Student Data:', newStudent);

    if (response?.success) {
      toast.success('Student added successfully!', {
        description: `${newStudent.name} has been successfully registered.`,
        actionProps: {
          children: 'Dismiss',
          onPress: () => toast.clear(),
          variant: 'tertiary',
        },
        variant: 'default',
        indicator: <Persons />,
      });
    }

    e.target.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-indigo-100 to-purple-100 px-4">
      <Form
        onSubmit={onSubmit}
        className="w-full max-w-lg bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-white"
      >
        <Fieldset>
          {/* Header */}
          <Fieldset.Legend className="text-2xl font-bold text-slate-800">
            Add Student
          </Fieldset.Legend>

          <Description className="text-slate-600 mb-4">
            Enter student information below
          </Description>

          <FieldGroup className="space-y-4">
            {/* Name */}
            <TextField
              isRequired
              name="name"
              validate={value => {
                if (value.length < 3)
                  return 'Name must be at least 3 characters';
                return null;
              }}
            >
              <Label>Name</Label>
              <Input placeholder="Type student full name here" />
              <FieldError />
            </TextField>

            {/* Age */}
            <TextField
              isRequired
              name="age"
              type="number"
              validate={value => {
                if (Number(value) < 1) return 'Age must be valid';
                return null;
              }}
            >
              <Label>Age</Label>
              <Input placeholder="Enter the student age" />
              <FieldError />
            </TextField>

            {/* Department */}
            <TextField isRequired name="department">
              <Label>Department</Label>
              <Input placeholder="CSE / EEE / BBA" />
              <FieldError />
            </TextField>
          </FieldGroup>

          {/* Buttons */}
          <Fieldset.Actions className="flex gap-3 mt-6">
            <Button
              type="submit"
              className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
            >
              <FloppyDisk />
              Add Student
            </Button>

            <Button
              type="reset"
              variant="secondary"
              className="border border-slate-300 px-4 py-2 rounded-lg hover:bg-slate-100 transition"
            >
              Cancel
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </div>
  );
};

export default AddStudentPage;
