import { useGetAllBooksQuery } from "../../services/booksApi";
import BookItem from "../BookItem/BookItem";

const BookList = () => {
  const { data, error, isLoading } = useGetAllBooksQuery({});

  if (isLoading) {
    return <p className="text-center text-[20px]">Loading .....</p>;
  }

  if (error) {
    return (
      <p className="text-center text-[20px]">
        Error, Please reload this page .....
      </p>
    );
  }

  return (
    <div className="mt-20 mb-10">
      <div className="grid grid-cols-4 gap-5">
        {data?.results.map((books) => (
          <BookItem key={books?.id} books={books} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
