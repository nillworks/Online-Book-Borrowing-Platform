import FeaturedBooksCard from '../HomePage/FeaturedBooksCard';
import FilterBooks from './FilterBooks';
import SearchTram from './SearchTram';

const AllBooksPage = async ({ bookData, searchParams }) => {
  const { category, search } = await searchParams;

  let books = [...(bookData?.books || [])];

  // ✅ Category filter
  if (category && category !== 'all-books') {
    books = books.filter(
      book => book.category.toLowerCase() === category.toLowerCase(),
    );
  }

  // ✅ Search filter
  if (search && search.trim() !== '') {
    books = books.filter(book =>
      book.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return (
    <section className="container max-w-7xl mx-auto px-3 py-10">
      {/* Filter + Search */}
      <div className="flex flex-col sm:flex-row items-center py-8 gap-4">
        <FilterBooks />
        <SearchTram defaultValue={search || ''} />
      </div>

      {/* Books */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {books?.map(book => (
          <FeaturedBooksCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default AllBooksPage;
