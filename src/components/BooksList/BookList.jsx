import { memo } from "react";
import BookItem from "../BookItem/BookItem";
import { useSelector } from "react-redux";
import BookListSkeleton from "../../shared/Skeleton/BookListSkeleton";

const BookList = ({ searchStatus, topicStatus, isLoading, error }) => {
  // --- book get from store ---
  const { books } = useSelector((state) => state.books);

  if (isLoading || searchStatus.loading || topicStatus.loading) {
    return <BookListSkeleton />;
  }

  if (error || searchStatus.error || topicStatus.error) {
    return (
      <p className="text-center text-[20px] text-red-500 my-48">
        Error, Please reload this page ...
      </p>
    );
  }

  return (
    <div className="my-10 sm:mt-20 sm:mb-10">
      {books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {books.map((book) => (
            <BookItem key={book?.id} book={book} />
          ))}
        </div>
      ) : (
        <p className="text-center text-[20px] text-green-500 my-32">
          Not found any book...
        </p>
      )}
    </div>
  );
};

export default memo(BookList);
