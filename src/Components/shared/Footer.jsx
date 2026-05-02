'use client';

import Link from 'next/link';
import { Globe, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-[#f8fafc] mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-slate-800">LuminaBooks</h2>
            <p className="mt-2 text-sm text-slate-500">
              Crafting the future of intellectual discovery through digital
              innovation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-slate-700 mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/help">Help Center</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-slate-700 mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-slate-700 mb-3">Connect</h3>
            <div className="flex gap-3">
              <button className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 transition">
                <Globe size={18} />
              </button>
              <button className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 transition">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-10 pt-5 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500">
          <p>© 2026 LuminaBooks. All rights reserved. Shipon Roy</p>

          <div className="flex items-center gap-2 mt-3 sm:mt-0">
            <Globe size={16} />
            <span>Global</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
