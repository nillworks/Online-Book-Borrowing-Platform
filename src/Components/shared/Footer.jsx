'use client';

import Link from 'next/link';
import { Globe, Mail } from 'lucide-react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20 relative overflow-hidden">
      {/* Decorative top blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
          
          {/* Brand & Description (spans 4 cols) */}
          <div className="md:col-span-4">
            <h2 className="text-2xl font-extrabold tracking-tight">
              <span className="text-gradient">NexaReads</span>
            </h2>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-sm">
              Crafting the future of intellectual discovery through digital
              innovation. Read, learn, and expand your horizons anywhere.
            </p>
            <div className="flex gap-4 mt-6">
              <button className="p-2.5 rounded-xl bg-slate-50 text-slate-500 border border-slate-100 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
                <FaTwitter size={18} />
              </button>
              <button className="p-2.5 rounded-xl bg-slate-50 text-slate-500 border border-slate-100 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
                <FaLinkedin size={18} />
              </button>
              <button className="p-2.5 rounded-xl bg-slate-50 text-slate-500 border border-slate-100 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
                <FaGithub size={18} />
              </button>
            </div>
          </div>

          {/* Navigation (spans 2 cols) */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="font-semibold text-slate-900 mb-5">Platform</h3>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <Link href="/all-books" className="hover:text-blue-600 transition-colors">Browse Books</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-600 transition-colors">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Support (spans 2 cols) */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-slate-900 mb-5">Support</h3>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <Link href="/help" className="hover:text-blue-600 transition-colors">Help Center</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter (spans 3 cols) */}
          <div className="md:col-span-3 lg:col-span-2 md:col-start-10">
            <h3 className="font-semibold text-slate-900 mb-5">Stay Updated</h3>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm placeholder-slate-400"
              />
              <button className="w-full btn-premium py-2.5 rounded-xl text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} NexaReads. All rights reserved.</p>

          <div className="flex items-center gap-2 mt-4 sm:mt-0 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
            <Globe size={14} className="text-blue-600" />
            <span className="font-medium text-slate-700">Global / English</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
