'use client';

import { useSession } from '@/lib/auth-client';
import { toast } from '@heroui/react';
import { useRouter } from 'next/navigation';

const BookButton = ({ available_quantity }) => {
  const { data } = useSession();
  const user = data?.user;
  const router = useRouter();

  return (
    <div className="mt-8 flex flex-col md:flex-row gap-4">
      <button
        onClick={() => {
          if (user) {
            toast.success('Book borrowed successfully');
          } else {
            toast.warning('Please login to borrow this book');
            router.push('/auth/signin');
          }
        }}
        disabled={available_quantity === 0}
        className="flex-1 cursor-pointer bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white py-3 rounded-xl font-medium"
      >
        Borrow This Book
      </button>

      <button
        onClick={() => {
          if (user) {
            toast.success('Book saved to your list');
          } else {
            toast.warning('Please login to save this book');
            router.push('/auth/signin');
          }
        }}
        className="flex-1 cursor-pointer border border-gray-300 py-3 rounded-xl font-medium"
      >
        Save for Later
      </button>
    </div>
  );
};

export default BookButton;
