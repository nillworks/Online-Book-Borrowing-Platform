import Image from 'next/image';
import heroImage from '../../../../public/assets/heroimage.png';
import { Play } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="w-full bg-[#F9F8FF] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <span className="relative inline-flex items-center gap-2 bg-[#E2DFFF] text-primaryColor text-xs sm:text-sm px-4 py-1 rounded-full mb-4 font-medium overflow-hidden">
            {/* animated dot */}
            <div className="relative flex items-center justify-center w-4 h-4">
              {/* ripple layer 1 */}
              <span className="absolute w-4 h-4 bg-green-400 rounded-full opacity-50 animate-[ripple_2s_linear_infinite]"></span>

              {/* ripple layer 2 */}
              <span className="absolute w-4 h-4 bg-green-400 rounded-full opacity-40 animate-[ripple_2s_linear_infinite_0.5s]"></span>

              {/* main dot */}
              <span className="relative w-2.5 h-2.5 bg-green-500 rounded-full animate-[scalePulse_1.5s_ease-in-out_infinite]"></span>
            </div>

            <span className="relative z-10">New Release: AI for Humans</span>

            <span className="absolute inset-0 bg-indigo-400 opacity-20 blur-md animate-pulse"></span>
          </span>

          <h1 className="text-3xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-900 leading-tight mb-4">
            <span className="typing-text">Find Your Next Read</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-md mx-auto md:mx-0">
            Explore our curated digital library of over 50,000 premium titles.
            Experience high-end typography and seamless reading across all your
            devices.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 justify-center md:justify-start">
            <Link href={`/all-books`}>
              <button className="w-full cursor-pointer sm:w-auto bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition">
                Browse Books
              </button>
            </Link>

            <button className="w-full cursor-pointer sm:w-auto flex items-center justify-center gap-2 px-5 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
              <Play /> Watch Demo
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div className="">
          <Image
            src={heroImage}
            alt="book"
            className=" object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
