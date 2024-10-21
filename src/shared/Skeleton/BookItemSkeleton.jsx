import { Skeleton } from "primereact/skeleton";

const BookItemSkeleton = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Skeleton width="150px" height="180px"></Skeleton>
      </div>
      <div className="mt-5">
        <div className="flex items-center justify-center">
          <Skeleton width="12rem"></Skeleton>
        </div>
        <div className="flex items-center justify-center my-3">
          <Skeleton width="12rem"></Skeleton>
        </div>
        <div className="flex items-center justify-center">
          <Skeleton width="12rem"></Skeleton>
        </div>
        <div className="flex items-center justify-center gap-x-3 text-white mt-3">
          <Skeleton width="2rem" height="2rem" borderRadius="16px"></Skeleton>
          <Skeleton width="2rem" height="2rem" borderRadius="16px"></Skeleton>
        </div>
      </div>
    </div>
  );
};

export default BookItemSkeleton;
