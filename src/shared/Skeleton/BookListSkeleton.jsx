import BookItemSkeleton from "./BookItemSkeleton";

const skeletonItem = new Array(32).fill(0);

const BookListSkeleton = () => {
  return (
    <div className="my-10 sm:mt-20 sm:mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {skeletonItem.map((_, index) => {
          return (
            <div key={index} className="p-3 shadow-lg rounded-md border">
              <BookItemSkeleton />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookListSkeleton;
