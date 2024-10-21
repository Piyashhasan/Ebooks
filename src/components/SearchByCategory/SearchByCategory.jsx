import { useEffect, useState } from "react";
import { filterByTopic } from "../../utils/utils";
import { useSearchByTopicQuery } from "../../services/booksApi";
import { useDispatch } from "react-redux";
import { allBooks } from "../../features/books/bookSlice";

const SearchByCategory = ({ setTopicStatus }) => {
  const [selectedTopic, setSelectedTopic] = useState("");

  const { data, error, isLoading } = useSearchByTopicQuery(selectedTopic, {
    skip: !selectedTopic,
  });

  // --- action dispatch ---
  const dispatch = useDispatch();

  // --- manage state + loading + error state ---
  useEffect(() => {
    if (data) {
      dispatch(allBooks(data));
      setTopicStatus({ loading: false, error: false });
    }
  }, [data, dispatch, setTopicStatus]);

  useEffect(() => {
    if (isLoading) {
      setTopicStatus((prev) => ({ ...prev, loading: true }));
    } else if (error) {
      setTopicStatus((prev) => ({ ...prev, error: true }));
    }
  }, [isLoading, error, setTopicStatus]);

  return (
    <div>
      <div className="mt-10 flex flex-wrap items-center justify-between sm:flex-nowrap sm:mt-16">
        <h2 className="text-[28px] sm:text-[32px] text-[#374151] font-semibold leading-[48px]">
          Showing Results
        </h2>
        <div className="flex justify-between items-center gap-3 w-full mt-5 sm:mt-0 sm:w-auto">
          <label>Filter by Topic:</label>
          <select
            value={selectedTopic}
            onChange={(e) => {
              setSelectedTopic(e.target.value);
              setTopicStatus({ loading: true, error: false });
            }}
            className="border outline-none px-10 py-3"
          >
            <option disabled value="">
              Select a topic
            </option>
            {filterByTopic.map((topic, index) => (
              <option key={index} value={topic.value}>
                {topic?.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchByCategory;
