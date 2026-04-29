import React from 'react';
import Marquee from 'react-fast-marquee';

const menuItems = [
  { id: 1, title: 'New Arrivals' },
  { id: 2, title: 'Trending Books' },
  { id: 3, title: 'Special Offers' },
  { id: 4, title: 'Exclusive Collections' },
  { id: 5, title: 'New Arrivals' },
  { id: 6, title: 'Trending Books' },
];

const MarqueePage = () => {
  return (
    <div className=" bg-[#f5f3ff] border-t border-b border-[#ddd]">
      <div className=" container max-w-7xl mx-auto py-4">
        <Marquee speed={100} gradient={false} pauseOnHover={true}>
          <div className="flex items-center gap-10 px-4">
            {menuItems.map(item => (
              <div key={item.id} className="flex items-center gap-6">
                {/* Text */}
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  {item.title}
                </span>

                {/* Dot */}
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueePage;
