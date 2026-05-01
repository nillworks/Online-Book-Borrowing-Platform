'use client';

import React from 'react';
import { LogOut } from 'lucide-react';
import Image from 'next/image';
import { useSession } from '@/lib/auth-client';
import UpdateProfile from './UpdateProfile';
import { signOut } from '@/lib/auth-client';

const UserProfile = () => {
  const { data } = useSession();
  const user = data?.user;

  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Top Gradient */}
        <div className="h-24 bg-gradient-to-r from-indigo-700 to-teal-700" />

        {/* Profile Section */}
        <div className="flex flex-col items-center -mt-12 px-6 pb-6 space-y-2">
          {/* Avatar */}
          <div className="relative">
            <Image
              src={user?.image}
              alt="user"
              width={96}
              height={96}
              className="w-24 h-24 rounded-full border-4 border-white shadow-md"
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
          </div>

          {/* Name & Email */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            {user?.name}
          </h2>
          <p className="text-sm text-gray-500">{user?.email}</p>

          {/* Update Button */}
          <div>
            <UpdateProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
