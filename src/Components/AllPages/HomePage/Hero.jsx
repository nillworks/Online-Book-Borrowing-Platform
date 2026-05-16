'use client';

import Image from 'next/image';
import heroImage from '../../../../public/assets/heroimage.png';
import { Play } from 'lucide-react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

const sliderImages = [
  'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800'
];

const Hero = () => {
  return (
    <section className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center md:text-left order-2 md:order-1 mt-10 md:mt-0">
          <span className="relative inline-flex items-center gap-2 bg-blue-50 text-blue-600 border border-blue-100 text-xs sm:text-sm px-4 py-1.5 rounded-full mb-6 font-medium overflow-hidden shadow-sm transition-all hover:shadow hover:bg-blue-100">
            {/* animated dot */}
            <div className="relative flex items-center justify-center w-3 h-3 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </div>

            <span className="relative z-10">New Release: AI for Humans</span>

            <span className="absolute inset-0 bg-blue-400 opacity-10 blur-md animate-pulse"></span>
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
            <span className="text-gradient">Find Your Next Read</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
            Explore our curated digital library of over 50,000 premium titles.
            Experience high-end typography and seamless reading across all your
            devices.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-5 justify-center md:justify-start">
            <Link href={`/all-books`} className="w-full sm:w-auto">
              <button className="w-full cursor-pointer sm:w-auto btn-premium px-8 py-3.5 rounded-xl text-lg">
                Browse Books
              </button>
            </Link>

            <button className="w-full cursor-pointer sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 glass-card rounded-xl text-slate-700 hover:text-blue-600 transition-colors font-semibold text-lg">
              <Play className="text-blue-600" /> Watch Demo
            </button>
          </div>
        </div>

        {/* Right Images with Swiper EffectCards */}
        <div className="relative group perspective order-1 md:order-2 px-8 sm:px-16 md:px-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-[2rem] transform rotate-3 scale-105 opacity-10 group-hover:rotate-6 group-hover:opacity-20 transition-all duration-700 blur-2xl"></div>
          
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full max-w-[320px] lg:max-w-[380px] aspect-[4/5] rounded-2xl shadow-2xl"
          >
            {sliderImages.map((img, idx) => (
              <SwiperSlide key={idx} className="rounded-2xl border border-white/20 overflow-hidden bg-white">
                <Image
                  src={img}
                  alt={`book-${idx}`}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
