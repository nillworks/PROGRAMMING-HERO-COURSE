'use client';

import { authClient } from '@/app/lib/auth-client';

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';

const SignUpPage = () => {
  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const FromData = Object.fromEntries(formData.entries());
    console.log(FromData);

    const { data, error } = await authClient.signUp.email({
      name: FromData.name,
      email: FromData.email,
      password: FromData.password,
    });

    console.log(data, error);
  };

  return (
    <>
      <Form
        className="flex w-96 flex-col mt-10 rounded-lg mx-auto shadow px-3 py-2 gap-4"
        onSubmit={onSubmit}
      >
        {/* Name  */}
        <TextField
          isRequired
          name="name"
          validate={value => {
            if (value.length < 3) {
              return 'Name must be at least 3 characters';
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input placeholder="Enter Your Name" />
          <FieldError />
        </TextField>

        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={value => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return 'Please enter a valid email address';
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter Your Email" />
          <FieldError />
        </TextField>

        {/* Password */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={value => {
            if (value.length < 8) {
              return 'Password must be at least 8 characters';
            }
            if (!/[A-Z]/.test(value)) {
              return 'Password must contain at least one uppercase letter';
            }
            if (!/[0-9]/.test(value)) {
              return 'Password must contain at least one number';
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">Sign Up</Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </>
  );
};

export default SignUpPage;
