import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import FeaturedBooksCard from './FeaturedBooksCard';
import getBooksData from './../../../lib/getBooksData';

const FeaturedBooks = async () => {
  const bookData = await getBooksData();

  return (
    <div className="container max-w-7xl mx-auto px-2 space-y-10">
      {/* title and subtile */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="text-gradient">Featured Books</span>
          </h2>
          <p className="text-[#464555]">
            Hand-picked by our editors this week.
          </p>
        </div>

        <Link
          href={'/all-books'}
          className="flex items-center gap-2 text-primaryColor font-semibold"
        >
          View All
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
        {bookData?.books
          ?.filter(book => book.available_quantity > 0)
          .slice(0, 4)
          .map(book => (
            <FeaturedBooksCard key={book.id} book={book} />
          ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
