import BookItemSkeleton from "./BookItemSkeleton";

const skeletonItem = JSON.parse(localStorage.getItem("wishListBooks")) || [];

const WishlistSkeleton = () => {
  console.log("-- wishlist --", skeletonItem.length);
  return (
    <div className="wrapper px-4 xl:px-0">
      <div className="my-10">
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
    </div>
  );
};

export default WishlistSkeleton;
