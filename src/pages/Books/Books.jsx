import { useEffect, useState } from "react";
import BookList from "../../components/BooksList/BookList";
import SearchByCategory from "../../components/SearchByCategory/SearchByCategory";
import SearchByInput from "../../components/SearchByInput/SearchByInput";
import Footer from "../../shared/Footer/Footer";
import { Paginator } from "primereact/paginator";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllBooksQuery } from "../../services/booksApi";
import { allBooks } from "../../features/books/bookSlice";

const Books = () => {
  // --- search by using input status ---
  const [searchStatus, setSearchStatus] = useState({
    loading: false,
    error: false,
  });

  // --- search by topic status ---
  const [topicStatus, setTopicStatus] = useState({
    loading: false,
    error: false,
  });

  // --- pagination functionality ---

  // const dispatch = useDispatch();
  // const { books, pagination } = useSelector((state) => state.books);
  // const { next, previous } = pagination;
  // const [currentPage, setCurrentPage] = useState(1);

  // const { data, isLoading, isError } = useGetAllBooksQuery({ next, previous });

  // useEffect(() => {
  //   if (data) {
  //     dispatch(allBooks(data));
  //   }
  // }, [data, dispatch]);

  // useEffect(() => {
  //   if (previous) {
  //     setCurrentPage((prev) => prev - 1);
  //   } else if (next) {
  //     setCurrentPage((prev) => prev + 1);
  //   }
  // }, [next, previous]);

  // const handleNext = () => {
  //   if (next) {
  //     dispatch(allBooks({ results: [], next }));
  //   }
  // };

  // const handlePrevious = () => {
  //   if (previous) {
  //     dispatch(allBooks({ results: [], previous }));
  //   }
  // };

  return (
    <>
      <div className="wrapper">
        <div className="py-12">
          <div className="flex items-center justify-center">
            <h1 className="text-[42px] text-[#374151] font-bold leading-[63px] text-center">
              Awesome Books You <br /> Should Know
            </h1>
          </div>
        </div>

        {/* --- book search input start --- */}
        <SearchByInput setSearchStatus={setSearchStatus} />
        {/* --- book search input end --- */}

        {/* --- book search result start --- */}
        <SearchByCategory setTopicStatus={setTopicStatus} />
        {/* --- book search result end --- */}

        {/* --- book items start --- */}
        <BookList searchStatus={searchStatus} topicStatus={topicStatus} />
        {/* --- book items end --- */}

        {/* --- pagination --- */}
        {/* <div className="flex items-center justify-center gap-5 mb-5">
          <button
            className="bg-blue-300"
            onClick={handlePrevious}
            disabled={!previous}
          >
            Previous
          </button>
          <div>{currentPage}</div>
          <button className="bg-blue-300" onClick={handleNext} disabled={!next}>
            Next
          </button>
        </div> */}
        {/* --- pagination --- */}
      </div>
      {/* --- footer start --- */}
      <div>
        <Footer />
      </div>
      {/* --- footer end --- */}
    </>
  );
};

export default Books;
