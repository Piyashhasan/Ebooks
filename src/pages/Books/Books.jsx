import { useEffect, useState } from "react";
import BookList from "../../components/BooksList/BookList";
import SearchByCategory from "../../components/SearchByCategory/SearchByCategory";
import SearchByInput from "../../components/SearchByInput/SearchByInput";
import Footer from "../../shared/Footer/Footer";
import Pagination from "../../components/Pagination/Pagination";
import { useGetAllBooksQuery } from "../../services/booksApi";
import { useDispatch } from "react-redux";
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
  const [currentUrl, setCurrentUrl] = useState(null);
  const { data, error, isFetching } = useGetAllBooksQuery(currentUrl);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(allBooks(data));
      console.log("pagination data", data);
    }
  }, [data, dispatch]);

  const fetchBooks = (url) => {
    setCurrentUrl(url);
  };

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
        <BookList
          searchStatus={searchStatus}
          topicStatus={topicStatus}
          isLoading={isFetching}
          error={error}
        />
        {/* --- book items end --- */}

        {/* --- pagination --- */}
        <Pagination fetchBooks={fetchBooks} isFetching={isFetching} />
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
