import { useLottie } from "lottie-react";
import bannerImg from "../../assets/images/banner.json";
import { Link } from "react-router-dom";

const Home = () => {
  const options = {
    animationData: bannerImg,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <div className="wrapper">
      <div className="flex items-center justify-between">
        <div className="w-full">
          <p className="text-[#2FCD71] text-[20px] font-bold leading-7">
            Books Gallery
          </p>
          <h1 className="text-[40px] font-semibold leading-[50px] py-8">
            Discover Your Next <br /> Great Read
          </h1>
          <p className="text-[18px]">
            Check out the most effective books personalized to you... !
          </p>
          <Link to="/books">
            <button className="bg-[#2FCD71] text-white font-bold px-10 py-2 rounded-md mt-8 hover:bg-green-600">
              Explore Books
            </button>
          </Link>
        </div>
        <div className="w-full flex items-center justify-end">
          <div className="w-[500px]">{View}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
