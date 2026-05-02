import AllBooksPage from '@/Components/AllPages/AllBooksPage/AllBooksPage';
import getBooksData from '@/lib/getBooksData';

export const metadata = {
  title: 'All Books | Explore & Discover Books',
  description:
    'Browse all available books in our collection. Discover new titles, explore categories, and find your next favorite book easily on our platform.',
};

const AllBooks = async ({ searchParams }) => {
  const bookData = await getBooksData();
  return (
    <div>
      <AllBooksPage bookData={bookData} searchParams={searchParams} />
    </div>
  );
};

export default AllBooks;
