import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../features/books/bookSlice";

const Pagination = ({ fetchBooks, isFetching }) => {
  const { pagination } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleNext = () => {
    if (pagination.next) {
      fetchBooks(pagination.next);
      dispatch(setCurrentPage(pagination.currentPage + 1));
    }
  };

  const handlePrevious = () => {
    if (pagination.previous) {
      fetchBooks(pagination.previous);
      dispatch(setCurrentPage(pagination.currentPage - 1));
    }
  };

  return (
    <div className="flex items-center justify-center gap-5 mt-6 mb-10">
      <button
        disabled={!pagination.previous || isFetching}
        onClick={handlePrevious}
        className={`px-5 py-[6px] rounded-lg ${
          pagination.previous
            ? "bg-[#72cd71] text-white cursor-pointer"
            : "bg-gray-400 text-gray-200 cursor-default"
        }`}
        style={{
          cursor:
            !pagination.previous || isFetching ? "not-allowed" : "pointer",
        }}
      >
        Previous
      </button>
      <span className="font-bold">
        Page:{" "}
        <span className="text-red-500">
          {pagination.currentPage} of {Math.floor(pagination.count / 32)}
        </span>
      </span>
      <button
        disabled={!pagination.next || isFetching}
        onClick={handleNext}
        className={`px-5 py-[6px] rounded-lg ${
          pagination.next
            ? "bg-[#72cd71] text-white cursor-pointer"
            : "bg-gray-400 text-gray-200 cursor-default"
        }`}
        style={{
          cursor: !pagination.next || isFetching ? "not-allowed" : "pointer",
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
