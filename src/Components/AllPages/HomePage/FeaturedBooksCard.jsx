'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FeaturedBooksCard = ({ book = {} }) => {
  const {
    id,
    title,
    author,
    image_url,
    category,
    available_quantity,
    description,
  } = book;

  //  Category Color System
  const categoryStyles = {
    Story: 'bg-pink-100 text-pink-600',
    Tech: 'bg-blue-100 text-blue-600',
    Science: 'bg-green-100 text-green-600',
  };

  //  Stock Color Logic
  const stockColor =
    available_quantity <= 3
      ? 'text-red-500'
      : available_quantity <= 6
        ? 'text-yellow-500'
        : 'text-green-600';

  return (
    <div className="group rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1">
      {/*  Image Section */}
      <div className="relative overflow-hidden">
        <Image
          width={400}
          height={400}
          src={image_url}
          alt={title}
          className="w-full h-56 object-cover  transition duration-500"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        {/* Category badge on image */}
        <span
          className={`absolute top-3 left-3 px-3 py-1 text-xs rounded-full font-semibold ${
            categoryStyles[category] || 'bg-gray-100 text-gray-600'
          }`}
        >
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#4F46E5] transition">
          {title}
        </h3>

        {/* Author */}
        <p className="text-sm text-gray-500">by {author}</p>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        {/* Stock */}
        <div className="flex justify-between items-center pt-2">
          <span className={`text-sm font-medium ${stockColor}`}>
            {available_quantity} copies left
          </span>
        </div>

        {/* Button */}
        <Link href={`/books/${id}`}>
          <button className="w-full cursor-pointer mt-3 py-2 rounded-lg bg-[#4F46E5] text-white font-medium hover:bg-indigo-700 transition duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBooksCard;
