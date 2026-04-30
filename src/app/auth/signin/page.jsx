'use client';

// import { authClient } from '@/lib/auth-client';
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from '@heroui/react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';

const SignInPage = () => {
  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const signInFormData = Object.fromEntries(formData.entries());

    // const { data, error } = await authClient.signIn.email({
    //   email: signInFormData.email,
    //   password: signInFormData.password,
    //   callbackURL: '/',
    // });

    // if (data) {
    //   toast('Success', {
    //     description: 'Logged in successfully',
    //   });
    //   router.push('/');
    // }

    // if (error) {
    //   toast('Error', {
    //     description: error.message || 'Invalid credentials',
    //     variant: 'destructive',
    //   });
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
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
          <TextField isRequired name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
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
