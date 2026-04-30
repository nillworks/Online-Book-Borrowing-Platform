import getBooksData from '@/lib/getBooksData';
import BookDetails from './../../../Components/AllPages/BooksDetailsPage/BookDetails';

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;

  // Filter Books Data
  const bookData = await getBooksData();
  const bookAllData = bookData.books;
  const ex = bookAllData.find(book => book.id === Number(id));

  return (
    <div>
      <BookDetails book={ex} />
    </div>
  );
};

export default BookDetailsPage;
