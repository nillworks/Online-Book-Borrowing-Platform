'use client';

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
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';

export default function SignUpPage() {
  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const signUpFormData = Object.fromEntries(formData.entries());
    console.log(signUpFormData);

    // const { data, error } = await authClient.signUp.email({
    //   name: signUpFormData.name,
    //   email: signUpFormData.email,
    //   password: signUpFormData.password,
    //   image: signUpFormData.image,
    //   callbackURL: '/',
    // });

    // if (data) {
    //   toast('Success', {
    //     description: 'Account created successfully',
    //   });
    //   router.push('/');
    // }

    // if (error) {
    //   toast('Error', {
    //     description: error.message || 'Something went wrong',
    //     variant: 'destructive',
    //   });
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <Card className="w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-2">Join Lumina</h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Create your account to start your reading journey.
        </p>

        {/* Form */}
        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {/* Name + Image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextField isRequired name="name" type="text">
              <Label>Full Name</Label>
              <Input placeholder="John Doe" />
              <FieldError />
            </TextField>

            <TextField isRequired name="image" type="text">
              <Label>Photo URL</Label>
              <Input placeholder="https://..." />
              <FieldError />
            </TextField>
          </div>

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
            <Label>Email Address</Label>
            <Input placeholder="name@example.com" />
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
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>Must be at least 8 characters.</Description>
            <FieldError />
          </TextField>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
          >
            Register →
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-grow h-px bg-gray-200"></div>
          <span className="px-3 text-xs text-gray-400">OR CONTINUE WITH</span>
          <div className="flex-grow h-px bg-gray-200"></div>
        </div>

        {/* Google Button */}
        <Button
          variant="secondary"
          className="w-full flex items-center justify-center gap-2"
        >
          <FcGoogle size={20} />
          Continue with Google
        </Button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{' '}
          <span
            className="text-indigo-600 cursor-pointer"
            onClick={() => router.push('/auth/signin')}
          >
            Login
          </span>
        </p>
      </Card>
    </div>
  );
}
