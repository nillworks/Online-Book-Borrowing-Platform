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
      <body className="min-h-full flex flex-col bg-[#fcf8ff] font-sans">
        <Toast.Provider placement={'top'} />
        <NavigationMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
