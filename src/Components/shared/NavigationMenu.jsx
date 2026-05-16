'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useSession } from '@/lib/auth-client';
import { Avatar, toast } from '@heroui/react';
import { signOut } from '@/lib/auth-client';
import Image from 'next/image';
import logo from '../../../public/assets/lumina_books_logo.png';

export const navItems = [
  { id: 1, name: 'Home', path: '/', auth: false },
  { id: 2, name: 'All Books', path: '/all-books', auth: false },
  { id: 3, name: 'My Profile', path: '/profile', auth: true },
];

const NavigationMenu = () => {
  const pathname = usePathname();
  const { data } = useSession();

  const isLoggedIn = data?.user;
  const [open, setOpen] = useState(false);

  const handleSignOut = () => {
    toast.success('Login Successful', {
      actionProps: {
        children: 'Welcome Back',
        className: 'bg-success text-success-foreground text-white',
      },
      description: 'You have successfully signed in to your account.',
      timeout: 3000,
    });

    signOut();
  };

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b border-white/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl flex gap-2 items-center font-extrabold tracking-tight"
        >
          <Image className="w-10 h-10 rounded-xl shadow-sm" src={logo} alt="NexaReads" /> 
          <span className="text-gradient">NexaReads</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map(item => {
            return (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={`relative pb-1 transition-all duration-300
                    ${
                      pathname === item.path
                        ? 'text-blue-600 after:w-full'
                        : 'text-slate-600 hover:text-blue-600'
                    }
                    after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                    after:w-0 after:bg-blue-600 after:transition-all after:duration-300`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-3">
          {!isLoggedIn ? (
            <>
              <Link
                href="/auth/signin"
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                Sign In
              </Link>

              <Link
                href="/auth/signup"
                className="btn-premium px-5 py-2.5 text-sm rounded-xl"
              >
                Get Started
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Avatar>
                <Avatar.Image alt={isLoggedIn?.name} src={isLoggedIn?.image} />
                <Avatar.Fallback>
                  {isLoggedIn?.name.slice(0, 2)}
                </Avatar.Fallback>
              </Avatar>

              <button
                onClick={async () => {
                  const { error } = await signOut();

                  if (!error) {
                    toast.danger('You just logged out successfully');
                  }
                }}
                className="rounded-xl cursor-pointer bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 font-medium px-4 py-2 text-sm transition-colors border border-red-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-white border-t">
          {/* Links */}
          {navItems.map(item => {
            return (
              <Link
                key={item.id}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`block text-sm font-medium transition-colors ${
                  pathname === item.path ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Auth */}
          {!isLoggedIn ? (
            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="/auth/signin"
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                Sign In
              </Link>

              <Link
                href="/auth/signup"
                onClick={() => setOpen(false)}
                className="btn-premium px-5 py-2.5 text-sm rounded-xl text-center"
              >
                Get Started
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Avatar>
                <Avatar.Image alt={isLoggedIn?.name} src={isLoggedIn?.image} />
                <Avatar.Fallback>
                  {isLoggedIn?.name.slice(0, 2)}
                </Avatar.Fallback>
              </Avatar>

              <button
                onClick={async () => {
                  const { error } = await signOut();

                  if (!error) {
                    toast.danger('You just logged out successfully');
                  }
                }}
                className="rounded-xl cursor-pointer bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 font-medium px-4 py-2 text-sm transition-colors border border-red-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavigationMenu;
