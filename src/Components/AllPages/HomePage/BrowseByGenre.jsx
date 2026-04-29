import Image from 'next/image';
import React from 'react';

const genres = [
  {
    id: 1,
    title: 'Story',
    subtitle: 'Fiction, Novels & Fantasy',
    image:
      'https://media.istockphoto.com/id/1279460648/photo/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-small-child-fantasy-nature.jpg?s=612x612&w=0&k=20&c=yK_dL8T7CjeYpNTvkXecPxQDDw9WczC8FB9bCO2McOw=',
  },
  {
    id: 2,
    title: 'Tech',
    subtitle: 'Coding, AI & Digital Systems',
    image:
      'https://www.womenintech.co.uk/wp-content/uploads/2021/11/Tech-skills-2022-1.png',
  },
  {
    id: 3,
    title: 'Science',
    subtitle: 'Physics, Biology & Space',
    image: 'https://thumbs.dreamstime.com/b/science-lab-chemicals-14262437.jpg',
  },
];

const BrowseByGenre = () => {
  return (
    <section className="bg-[#EAE6F4]/30 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-lg sm:text-2xl font-semibold text-gray-800 mb-8 lg:text-2xl">
          Browse by Genre
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {genres.map(item => (
            <div
              key={item.id}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                className="w-full h-40 sm:h-44 md:h-48 object-cover transform group-hover:scale-105 transition duration-500"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Text */}
              <div className="absolute bottom-3 left-4 text-white">
                <h3 className="text-sm sm:text-base font-semibold">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-200">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByGenre;
