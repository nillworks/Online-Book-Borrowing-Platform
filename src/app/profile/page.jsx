import UserProfile from '@/Components/AllPages/UserProfile/UserProfile';
import React from 'react';

export const metadata = {
  title: 'My Profile | Online Book Borrowing Platform',
  description:
    'Access your personal profile to update account details, view activity, and manage your book borrowing history in one place.',
};

const User = () => {
  return (
    <>
      <UserProfile />
    </>
  );
};

export default User;
