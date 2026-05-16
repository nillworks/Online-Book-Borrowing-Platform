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
        className="flex-1 cursor-pointer btn-premium py-3.5 rounded-xl disabled:opacity-50 disabled:pointer-events-none"
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
        className="flex-1 cursor-pointer bg-white border border-slate-200 py-3.5 rounded-xl font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 hover:-translate-y-0.5 shadow-sm hover:shadow transition-all duration-300"
      >
        Save for Later
      </button>
    </div>
  );
};

export default BookButton;
