'use client';

import React from 'react';
import Image from 'next/image';
import { useSession } from '@/lib/auth-client';
import UpdateProfile from './UpdateProfile';

const UserProfile = () => {
  const { data } = useSession();
  const user = data?.user;

  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-[350px] glass-card overflow-hidden">
        {/* Top Gradient */}
        <div className="h-28 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-90" />

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
