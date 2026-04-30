import getBooksData from '@/lib/getBooksData';
import FeaturedBooksCard from '../HomePage/FeaturedBooksCard';

const AllBooksPage = async () => {
  const bookData = await getBooksData();

  return (
    <section className="container max-w-7xl mx-auto px-3 py-10">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
        {bookData?.books.map(book => (
          <FeaturedBooksCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default AllBooksPage;
