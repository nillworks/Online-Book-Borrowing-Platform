import AllBooksPage from '@/Components/AllPages/AllBooksPage/AllBooksPage';
import getBooksData from '@/lib/getBooksData';

const AllBooks = async () => {
  const bookData = await getBooksData();
  return (
    <div>
      <AllBooksPage bookData={bookData} />
    </div>
  );
};

export default AllBooks;
