import Loading from "../../shared/Loading/Loading";
import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../../services/booksApi";

const BookDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetSingleBookQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <p className="text-center text-[20px] text-red-400 mt-[100px]">
        Error, Please reload this page .....
      </p>
    );
  }

  return (
    <div className="wrapper">
      <div className="grid grid-cols-2 gap-5 py-10">
        <div className="flex justify-center">
          <img
            className="max-w-[300px] max-h-[450px] object-cover object-top"
            src={data?.formats?.["image/jpeg"]}
            alt="Book image"
          />
        </div>
        <div>
          <h2 className="text-[38px] text-[#374151] font-semibold leading-[48px]">
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
          <div className="mt-3 mb-5">
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
