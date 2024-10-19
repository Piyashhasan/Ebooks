import { useState } from "react";
import BookList from "../../components/BooksList/BookList";
import SearchByCategory from "../../components/SearchByCategory/SearchByCategory";
import SearchByInput from "../../components/SearchByInput/SearchByInput";
import Footer from "../../shared/Footer/Footer";
import { Paginator } from "primereact/paginator";

const Books = () => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
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
        <SearchByInput />
        {/* --- book search input end --- */}

        {/* --- book search result start --- */}
        <SearchByCategory />
        {/* --- book search result end --- */}

        {/* --- book items start --- */}
        <BookList />
        {/* --- book items end --- */}

        {/* --- pagination --- */}
        <div className="mb-5">
          <Paginator
            first={first}
            rows={rows}
            totalRecords={120}
            onPageChange={onPageChange}
          />
        </div>
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
