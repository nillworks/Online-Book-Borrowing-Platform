'use client';

import { authClient } from '@/lib/auth-client';
// import { authClient } from '@/lib/auth-client';
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from '@heroui/react';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const signInFormData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: signInFormData.email,
      password: signInFormData.password,
      callbackURL: '/',
    });

    if (data) {
      toast.success('Login Successful', {
        actionProps: {
          children: 'Welcome Back',
          className: 'bg-success text-success-foreground text-white',
        },
        description: 'You have successfully signed in to your account.',
        timeout: 3000,
      });
    }

    console.log(error);

    if (error.status == 401) {
      console.log(error.status);
      toast.danger('Login Failed', {
        actionProps: {
          children: 'Try Again',
          className: 'bg-danger text-danger-foreground text-white',
        },
        description: error.message || 'Something went wrong',
        timeout: 3000,
      });
    }
  };

  return (
    <div className=" py-10 flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Sign in to continue your reading journey.
        </p>

        {/* Form */}
        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={value => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return 'Enter a valid email';
              }
              return null;
            }}
          >
            <Label>Email Address</Label>
            <Input placeholder="name@example.com" />
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
              return null;
            }}
          >
            <Label>Password</Label>

            <div className="relative">
              <Input
                placeholder="Enter your password"
                className="pr-10 w-full"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <Description>Must be at least 8 characters.</Description>
            <FieldError />
          </TextField>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
          >
            Login →
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-grow h-px bg-gray-200"></div>
          <span className="px-3 text-xs text-gray-400">OR CONTINUE WITH</span>
          <div className="flex-grow h-px bg-gray-200"></div>
        </div>

        {/* Google Button */}
        <Button variant="secondary" className="w-full flex items-center gap-2">
          <FcGoogle size={20} />
          Continue with Google
        </Button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Don’t have an account?{' '}
          <span
            className="text-indigo-600 cursor-pointer"
            onClick={() => router.push('/auth/signup')}
          >
            Register
          </span>
        </p>
      </Card>
    </div>
  );
};

export default SignInPage;
