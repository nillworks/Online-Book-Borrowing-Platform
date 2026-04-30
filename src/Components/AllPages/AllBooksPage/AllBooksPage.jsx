'use client';

import { useState } from 'react';
import FeaturedBooksCard from '../HomePage/FeaturedBooksCard';
import FilterBooks from './FilterBooks';
import SearchTram from './SearchTram';

const AllBooksPage = ({ bookData }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [availability, setAvailability] = useState('all');

  // toggle category
  const handleCategoryChange = category => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category],
    );
  };

  // filter logic
  const filteredBooks = bookData?.books.filter(book => {
    //  Search by title
    const searchMatch = book.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    //  Category filter
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(book.category);

    //  Availability filter
    const availabilityMatch =
      availability === 'all'
        ? true
        : availability === 'available'
          ? book.available === true
          : true;

    // ALL CONDITIONS MUST MATCH
    return searchMatch && categoryMatch && availabilityMatch;
  });

  return (
    <section className="container max-w-7xl mx-auto px-3 py-10">
      <section>
        <SearchTram setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="p-6 rounded-xl h-fit">
          <FilterBooks
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
            availability={availability}
            setAvailability={setAvailability}
          />
        </aside>

        {/* Books */}

        <>
          <div className="lg:col-span-3 grid gap-5 grid-cols-1 sm:grid-cols-3">
            {filteredBooks?.length > 0 ? (
              filteredBooks.map(book => (
                <FeaturedBooksCard key={book.id} book={book} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-20">
                <h2 className="text-xl font-semibold text-gray-500">
                  Not Found
                </h2>
                <p className="text-gray-400 mt-2">No books match your filter</p>
              </div>
            )}
          </div>
        </>
      </div>
    </section>
  );
};

export default AllBooksPage;
