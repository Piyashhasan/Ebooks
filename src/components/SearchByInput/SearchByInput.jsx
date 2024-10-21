import { memo, useEffect, useState } from "react";
import { useSearchBooksQuery } from "../../services/booksApi";
import { useDispatch } from "react-redux";
import { allBooks } from "../../features/books/bookSlice";

const SearchByInput = ({ setSearchStatus }) => {
  const [searchInput, setSearchInput] = useState("");
  const [trimText, setTrimText] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);

  // --- fetch books based on search input from rtk query ---
  const { data, error, isLoading } = useSearchBooksQuery(trimText, {
    skip: !triggerSearch,
  });

  // --- dispatch ---
  const dispatch = useDispatch();

  // --- form submit handler ---
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = searchInput
      .toLocaleLowerCase()
      .trim()
      .replace(/\s+/g, " ");

    if (searchInput) {
      setTrimText(searchText);
      setTriggerSearch(true);
    }
  };

  // --- manage state + loading + error state ---
  useEffect(() => {
    if (data) {
      dispatch(allBooks(data));
      setSearchInput("");
      setTriggerSearch(false);
      setSearchStatus({ loading: false, error: false });
    }
    if (isLoading) {
      setSearchStatus((prev) => ({ ...prev, loading: true }));
    }
    if (error) {
      setSearchStatus((prev) => ({ ...prev, error: true }));
    }
  }, [data, dispatch, setSearchStatus, isLoading, error]);

  return (
    <form onSubmit={handleSearch}>
      <div className="flex items-center justify-between">
        <input
          className="py-3 px-5 sm:px-10 outline-none border w-full"
          type="text"
          placeholder="Search Books"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#2FCD71] text-white px-5 py-[13px] sm:px-14 hover:bg-green-600"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default memo(SearchByInput);
