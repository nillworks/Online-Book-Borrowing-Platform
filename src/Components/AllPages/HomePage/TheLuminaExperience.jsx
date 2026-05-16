'use client';

import { BookOpen, Laptop, Zap, Sparkles } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const TheLuminaExperience = () => {
  const features = [
    {
      title: 'Curated Quality',
      description:
        'Every book in our collection passes a rigorous formatting and quality check for the best reading experience.',
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Cloud Sync',
      description:
        'Start reading on your laptop and finish on your phone. Your progress and highlights are always in sync.',
      icon: <Laptop className="w-6 h-6 text-cyan-600" />,
      bgColor: 'bg-cyan-50',
    },
    {
      title: 'Offline Access',
      description:
        'Download your library and read anytime, anywhere, even without an internet connection.',
      icon: <Zap className="w-6 h-6 text-sky-600" />,
      bgColor: 'bg-sky-50',
    },
    {
      title: 'AI Recommendations',
      description:
        'Get smart book suggestions based on your reading habits, interests, and favorite genres for a more personalized reading experience.',
      icon: <Sparkles className="w-6 h-6 text-indigo-600" />,
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            <span className="text-gradient">The NexaReads Experience</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We’ve reimagined the digital library for the modern intellectual.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="glass-card p-10 rounded-3xl flex flex-col items-start cursor-pointer h-full group">
                {/* Icon */}
                <div className={`p-4 rounded-2xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-3 text-lg">
                  {feature.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TheLuminaExperience;
