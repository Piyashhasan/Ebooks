import { useEffect, useState } from "react";
import BookItems from "../../components/BookItem/BookItem";
import { useGetBooksByIdsQuery } from "../../services/booksApi";
import WishlistSkeleton from "../../shared/Skeleton/WishlistSkeleton";

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
    return <WishlistSkeleton />;
  }

  if (error) {
    return (
      <p className="text-center text-[20px] text-red-500 my-48">
        Error, Please reload this page ...
      </p>
    );
  }

  return (
    <>
      <div className="wrapper px-4 xl:px-0">
        <div className="my-10">
          {data?.results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {data?.results.map((book) => (
                <BookItems key={book?.id} book={book} />
              ))}
            </div>
          ) : (
            <p className="text-center text-[20px] text-green-500 my-32">
              You have no Wishlist Book ...
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
