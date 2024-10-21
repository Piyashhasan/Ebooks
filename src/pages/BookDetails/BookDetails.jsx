import Loading from "../../shared/Loading/Loading";
import { Link, useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../../services/booksApi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const BookDetails = () => {
  // --- id extract from url ---
  const { id } = useParams();

  // --- fetch single book description from rtk query ---
  const { data, error, isLoading } = useGetSingleBookQuery(id);

  // --- loading state manage ---
  if (isLoading) {
    return <Loading />;
  }

  // --- manage error state ---
  if (error) {
    return (
      <p className="text-center text-[20px] text-red-400 mt-[100px]">
        Error, Please reload this page .....
      </p>
    );
  }

  return (
    <div className="wrapper">
      <div className="my-5 px-4 xl:px-0">
        <Link to="/books">
          <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#2FCD71] text-white hover:bg-green-600 cursor-pointer">
            <MdOutlineKeyboardBackspace className="text-[25px]" />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5 pb-10 px-4 xl:px-0">
        <div className="flex justify-center">
          <img
            className="max-w-[300px] max-h-[450px] object-cover object-top"
            src={data?.formats?.["image/jpeg"]}
            alt="Book image"
          />
        </div>
        <div className="mt-5 md:mt-0">
          <h2 className="text-[32px] sm:text-[38px] text-[#374151] font-semibold leading-[48px]">
            {data?.title}
          </h2>
          <div className="mt-3">
            <p className="text-[22px] text-[#374151]">
              Author Name:{" "}
              <span className="text-red-500 font-semibold">
                {data?.authors[0]?.name}
              </span>
            </p>
            <ul className="list-disc text-[#374151] ml-10">
              <li>Author Birth: {data?.authors[0]?.birth_year}</li>
              <li>Author Death: {data?.authors[0]?.death_year}</li>
            </ul>
          </div>
          <div className="mt-3">
            <p className="text-[22px] text-[#374151]">Subject :</p>
            <ul className="list-disc text-[#374151] ml-10">
              {data?.subjects.map((subject, index) => {
                return <li key={index}>{subject}</li>;
              })}
            </ul>
          </div>
          <div className="mt-3">
            <p className="text-[22px] text-[#374151]">Book Shelves :</p>
            <ul className="list-disc text-[#374151] ml-10">
              {data?.bookshelves.map((bookshelf, index) => {
                return <li key={index}>{bookshelf}</li>;
              })}
            </ul>
          </div>
          <div className="mt-3 mb-8">
            <p className="text-[#374151] capitalize">
              Language: {data?.languages}
            </p>
            <p className="text-[#374151] mt-2">
              Total Download :{" "}
              <span className="text-red-500">{data?.download_count}</span>
            </p>
          </div>

          <a
            target="_blank"
            href={data?.formats?.["text/html"]}
            className="bg-[#2FCD71] text-white font-bold px-10 py-3 rounded-md hover:bg-green-600 cursor-pointer"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
