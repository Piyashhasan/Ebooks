const SearchByInput = () => {
  return (
    <form action="">
      <div className="flex items-center justify-between">
        <input
          className="py-3 px-10 outline-none border w-full"
          type="text"
          placeholder="Search Books"
        />
        <button className="bg-[#2FCD71] text-white py-[13px] px-14 hover:bg-green-600">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchByInput;
