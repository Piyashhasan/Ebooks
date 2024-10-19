import { FaDownload, FaRegHeart } from "react-icons/fa";
import { truncateText } from "../../utils/utils";
import { Link } from "react-router-dom";
import { memo } from "react";

const BookItem = ({ books }) => {
  return (
    <Link to={`/books/${books?.id}`}>
      <div
        key={books?.id}
        className="p-3 shadow-lg rounded-md border  relative"
      >
        <div className="flex justify-center">
          <img
            className="w-[200px] h-[150px] object-contain object-center"
            src={books?.formats?.["image/jpeg"]}
            alt="Book cover"
          />
        </div>
        <div className="mt-5 text-center">
          <p>{truncateText(books?.title, 3)}</p>
          <p className="my-2">
            <span className="font-bold">Author:</span>{" "}
            {truncateText(books?.authors[0]?.name, 2)}
          </p>
          <p>
            <span className="font-bold">Total Download:</span>{" "}
            <span className="text-red-500">{books?.download_count}</span>
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="absolute bottom-0 flex gap-5 pb-5">
            <Link to={books?.formats?.["application/octet-stream"]}>
              <FaDownload className="text-[22px] text-green-500" />
            </Link>
            <button>
              <FaRegHeart className="text-[22px] text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(BookItem);
