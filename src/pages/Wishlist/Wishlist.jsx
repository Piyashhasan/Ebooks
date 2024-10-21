import { useEffect, useState } from "react";
import BookItems from "../../components/BookItem/BookItem";
import { useGetBooksByIdsQuery } from "../../services/booksApi";
import Footer from "../../shared/Footer/Footer";

const Wishlist = () => {
  const [wishListBooks, setWishListBooks] = useState([]);

  // --- Fetch data from localStorage ---
  useEffect(() => {
    const books = JSON.parse(localStorage.getItem("wishListBooks")) || [];
    setWishListBooks(books);
  }, []);

  // Fetch data from API
  const { data, error, isLoading } = useGetBooksByIdsQuery(wishListBooks, {
    skip: wishListBooks.length === 0,
  });

  if (isLoading) {
    return <p className="text-center">Loading ...</p>;
  }

  if (error) {
    return <p className="text-center">Error ...</p>;
  }

  return (
    <>
      <div className="wrapper px-4 xl:px-0">
        <div className="my-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {data?.results.map((book) => (
              <BookItems key={book?.id} book={book} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Wishlist;
