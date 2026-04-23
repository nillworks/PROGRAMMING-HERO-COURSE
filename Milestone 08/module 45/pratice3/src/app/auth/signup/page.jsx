'use client';

import { authClient } from '@/app/lib/auth-client';
import { Check } from '@gravity-ui/icons';
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
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const onSubmitSignUp = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const convertObj = Object.fromEntries(formData);
    const { data, error } = await authClient.signUp.email({
      name: convertObj.name,
      email: convertObj.email,
      password: convertObj.password,
      // callbackURL: '/',
    });

    if (data) {
      router.push('/'); // ✅ redirect to home
    }

    console.log(data, error);
  };

  return (
    <>
      <Form
        className="flex w-96 flex-col gap-4 mx-auto mt-10 shadow p-2 rounded-lg"
        onSubmit={onSubmitSignUp}
      >
        {/* Name Field */}
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

        {/* Email Field */}
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

        {/* Password Field */}
        <TextField
          isRequired
          minLength={8}
          name="password"
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
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="w-full"
            />

            {/* Toggle Button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        {/* Sign Up Now */}
        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Sign Up
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </>
  );
};

export default SignUpPage;
