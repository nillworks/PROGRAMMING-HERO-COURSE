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

import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const FromData = Object.fromEntries(formData.entries());
    console.log(FromData);

    const { data, error } = await authClient.signIn.email({
      email: FromData.email,
      password: FromData.password,
      rememberMe: true,
      callbackURL: '/',
    });

    console.log(data, error);
  };

  return (
    <>
      <Form
        className="flex w-96 flex-col mt-10 rounded-lg mx-auto shadow px-3 py-2 gap-4"
        onSubmit={onSubmit}
      >
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
          type={showPassword ? 'text' : 'password'}
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

          <div className="relative">
            <Input placeholder="Enter your password" className="w-full" />

            {/* Eye Icon */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        {/* Sign In Sign Up */}
        <div className="flex gap-2">
          <Button type="submit">Sign In</Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </>
  );
};

export default SignInPage;
