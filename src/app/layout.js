import { Inter } from 'next/font/google';
import './globals.css';
import NavigationMenu from '@/Components/shared/NavigationMenu';
import Footer from '@/Components/shared/Footer';
import { Toast } from '@heroui/react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Online Book Borrowing Platform',
  description:
    'Borrow, discover, and manage books online with a modern and seamless reading experience.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gradient-premium font-sans text-gray-800">
        <Toast.Provider placement={'top'} />
        <NavigationMenu />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
