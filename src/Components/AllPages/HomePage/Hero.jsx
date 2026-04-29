import Image from 'next/image';
import heroImage from '../../../../public/assets/heroimage.png';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="w-full bg-[#F9F8FF] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <span className="inline-block bg-[#E2DFFF] font-medium text-primaryColor text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full mb-4 ">
            New Release: AI for Humans
          </span>

          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 2xl:text-5xl">
            Find Your Next Read
          </h1>

          <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-md mx-auto md:mx-0">
            Explore our curated digital library of over 50,000 premium titles.
            Experience high-end typography and seamless reading across all your
            devices.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 justify-center md:justify-start">
            <button className="w-full cursor-pointer sm:w-auto bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition">
              Browse Books
            </button>

            <button className="w-full cursor-pointer sm:w-auto flex items-center justify-center gap-2 px-5 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
              <Play /> Watch Demo
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div className="">
          {/* Back Card */}
          <div className="right-2 sm:right-10 top-0 sm:top-4 rotate-6  p-2 sm:p-3 rounded-xl ">
            <Image
              src={heroImage}
              alt="book"
              className=" object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
