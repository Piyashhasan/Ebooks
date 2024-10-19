const SearchByCategory = () => {
  return (
    <div>
      <div className="mt-16 flex items-center justify-between">
        <h2 className="text-[32px] text-[#374151] font-semibold leading-[48px]">
          Showing Results
        </h2>
        <div className="flex items-center gap-3">
          <label>Filter by Topic:</label>
          <select className="border outline-none px-10 py-3" name="" id="">
            <option value="">All</option>
            <option value="">check</option>
            <option value="">check</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchByCategory;
