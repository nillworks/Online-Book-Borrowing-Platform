import React from 'react';
import Marquee from 'react-fast-marquee';

const menuItems = [
  { id: 1, title: 'New Arrivals' },
  { id: 2, title: 'Trending Books' },
  { id: 3, title: 'Best Sellers' },
  { id: 4, title: 'Special Offers' },
  { id: 5, title: 'Exclusive Collections' },
  { id: 6, title: 'Recommended' },
  { id: 7, title: 'Top Rated' },
  { id: 8, title: 'Recently Viewed' },
];

const MarqueePage = () => {
  return (
    <div className="glass border-y border-slate-200 shadow-sm relative z-20">
      <div className=" container max-w-7xl mx-auto py-4">
        <Marquee speed={100} pauseOnHover={true}>
          <div className="flex items-center gap-10 px-4">
            {menuItems.map(item => (
              <div key={item.id} className="flex items-center gap-6">
                {/* Text */}
                <span className="text-blue-800 font-semibold text-sm sm:text-base uppercase tracking-wider">
                  {item.title}
                </span>

                {/* Dot */}
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueePage;
