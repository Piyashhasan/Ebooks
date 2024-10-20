import { FaDownload, FaRegHeart, FaHeart } from "react-icons/fa";
import { truncateText } from "../../utils/utils";
import { Link } from "react-router-dom";
import { memo, useEffect, useState } from "react";

const BookItem = ({ book }) => {
  const [isWishlist, setWishList] = useState(false);

  useEffect(() => {
    const wishListBooks =
      JSON.parse(localStorage.getItem("wishListBooks")) || [];
    if (wishListBooks.includes(book?.id)) {
      setWishList(true);
    }
  }, [book?.id]);

  const toggleLike = () => {
    const wishListBooks =
      JSON.parse(localStorage.getItem("wishListBooks")) || [];

    if (isWishlist) {
      const updatedLikedBooks = wishListBooks.filter((id) => id !== book?.id);
      localStorage.setItem("wishListBooks", JSON.stringify(updatedLikedBooks));
      setWishList(false);
    } else {
      wishListBooks.push(book?.id);
      localStorage.setItem("wishListBooks", JSON.stringify(wishListBooks));
      setWishList(true);
    }
  };

  return (
    <div key={book?.id} className="p-3 shadow-lg rounded-md border  relative">
      <Link to={`/books/${book?.id}`}>
        <div className="flex justify-center">
          <img
            className="w-[200px] h-[150px] object-contain object-center"
            src={book?.formats?.["image/jpeg"]}
            alt="Book cover"
          />
        </div>
        <div className="mt-5 text-center">
          <p>{truncateText(book?.title, 3)}</p>
          <p className="my-2">
            <span className="font-bold">Author:</span>{" "}
            {truncateText(book?.authors[0]?.name, 2)}
          </p>
          <p>
            <span className="font-bold">Total Download:</span>{" "}
            <span className="text-red-500">{book?.download_count}</span>
          </p>
        </div>
      </Link>
      <div className="mt-12 flex justify-center">
        <div className="absolute bottom-0 flex gap-5 pb-5">
          <Link to={book?.formats?.["application/octet-stream"]}>
            <FaDownload className="text-[22px] text-green-500" />
          </Link>
          <button onClick={toggleLike}>
            {isWishlist ? (
              <FaHeart className="text-[22px] text-red-500" />
            ) : (
              <FaRegHeart className="text-[22px] text-red-500" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(BookItem);
