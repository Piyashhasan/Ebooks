import BookItem from "../BookItem/BookItem";
import { useSelector } from "react-redux";

const BookList = ({ searchStatus, topicStatus, isLoading, error }) => {
  // --- book get from store ---
  const { books } = useSelector((state) => state.books);

  if (isLoading || searchStatus.loading || topicStatus.loading) {
    return <p className="text-center text-[20px]">Loading .....</p>;
  }

  if (error || searchStatus.error || topicStatus.error) {
    return (
      <p className="text-center text-[20px]">
        Error, Please reload this page .....
      </p>
    );
  }

  return (
    <div className="my-10 sm:mt-20 sm:mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {books.map((book) => (
          <BookItem key={book?.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
