import { FaDownload, FaRegHeart } from "react-icons/fa";

const BookItems = () => {
  return (
    <div className="mt-20 mb-10">
      <div className="grid grid-cols-4 gap-5">
        <div className="p-3 shadow-lg rounded-md border">
          <div className="flex justify-center">
            <img
              className="w-[200px] h-[150px] object-contain object-center"
              src="https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg"
              alt="Book cover"
            />
          </div>
          <div className="mt-5 text-center">
            <p>Frankenstein; Or, The Modern Prometheus</p>
            <p className="my-2">
              <span className="font-bold">Author:</span> Shelley, Mary
              Wollstonecraft
            </p>
            <p>
              <span className="font-bold">Total Download:</span>{" "}
              <span className="text-red-500">78467</span>
            </p>
            <div className="mt-5 flex items-center justify-center gap-5">
              <button>
                <FaDownload className="text-[22px] text-green-500" />
              </button>
              <button>
                <FaRegHeart className="text-[22px] text-red-500" />
              </button>
            </div>
          </div>
        </div>
        <div className="p-3 shadow-lg rounded-md border">
          <div className="flex justify-center">
            <img
              className="w-[200px] h-[150px] object-contain object-center"
              src="https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg"
              alt="Book cover"
            />
          </div>
          <div className="mt-5 text-center">
            <p>Frankenstein; Or, The Modern Prometheus</p>
            <p className="my-2">
              <span className="font-bold">Author:</span> Shelley, Mary
              Wollstonecraft
            </p>
            <p>
              <span className="font-bold">Total Download:</span>{" "}
              <span className="text-red-500">78467</span>
            </p>
            <div className="mt-5 flex items-center justify-center gap-5">
              <button>
                <FaDownload className="text-[22px] text-green-500" />
              </button>
              <button>
                <FaRegHeart className="text-[22px] text-red-500" />
              </button>
            </div>
          </div>
        </div>
        <div className="p-3 shadow-lg rounded-md border">
          <div className="flex justify-center">
            <img
              className="w-[200px] h-[150px] object-contain object-center"
              src="https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg"
              alt="Book cover"
            />
          </div>
          <div className="mt-5 text-center">
            <p>Frankenstein; Or, The Modern Prometheus</p>
            <p className="my-2">
              <span className="font-bold">Author:</span> Shelley, Mary
              Wollstonecraft
            </p>
            <p>
              <span className="font-bold">Total Download:</span>{" "}
              <span className="text-red-500">78467</span>
            </p>
            <div className="mt-5 flex items-center justify-center gap-5">
              <button>
                <FaDownload className="text-[22px] text-green-500" />
              </button>
              <button>
                <FaRegHeart className="text-[22px] text-red-500" />
              </button>
            </div>
          </div>
        </div>
        <div className="p-3 shadow-lg rounded-md border">
          <div className="flex justify-center">
            <img
              className="w-[200px] h-[150px] object-contain object-center"
              src="https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg"
              alt="Book cover"
            />
          </div>
          <div className="mt-5 text-center">
            <p>Frankenstein; Or, The Modern Prometheus</p>
            <p className="my-2">
              <span className="font-bold">Author:</span> Shelley, Mary
              Wollstonecraft
            </p>
            <p>
              <span className="font-bold">Total Download:</span>{" "}
              <span className="text-red-500">78467</span>
            </p>
            <div className="mt-5 flex items-center justify-center gap-5">
              <button>
                <FaDownload className="text-[22px] text-green-500" />
              </button>
              <button>
                <FaRegHeart className="text-[22px] text-red-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItems;
