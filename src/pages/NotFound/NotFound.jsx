import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center my-16">
      <h2 className="my-5 text-[18px] font-bold">Not Found</h2>
      <p className="font-bold mb-5">Could not find requested resource</p>
      <Link className="bg-[#2FCD71] px-10 py-2 rounded-md text-white" to="/">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
