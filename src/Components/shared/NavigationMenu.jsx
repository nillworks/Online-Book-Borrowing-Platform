'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export const navItems = [
  { id: 1, name: 'Home', path: '/', auth: false },
  { id: 2, name: 'All Books', path: '/all-books', auth: false },
  { id: 3, name: 'My Profile', path: '/profile', auth: true },
];

const NavigationMenu = () => {
  const pathname = usePathname();
  const isLoggedIn = null;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white/70 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          LuminaBooks
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map(item => {
            return (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={`relative pb-1 transition-all
                    ${
                      pathname === item.path
                        ? 'text-indigo-600 after:w-full'
                        : 'text-gray-600 hover:text-indigo-600'
                    }
                    after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                    after:w-0 after:bg-indigo-600 after:transition-all`}
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
                className="text-sm font-medium text-gray-600 hover:text-indigo-600"
              >
                Sign In
              </Link>

              <Link
                href="/auth/signup"
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <span className="text-sm text-gray-600">User</span>
              <button className="rounded-lg bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600">
                Logout
              </button>
            </>
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
                className={`block text-sm font-medium ${
                  pathname === item.path ? 'text-indigo-600' : 'text-gray-600'
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
                href="/login"
                onClick={() => setOpen(false)}
                className="text-sm text-gray-600"
              >
                Sign In
              </Link>

              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white text-center"
              >
                Get Started
              </Link>
            </div>
          ) : (
            <button className="w-full rounded-lg bg-red-500 px-4 py-2 text-sm text-white">
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavigationMenu;
