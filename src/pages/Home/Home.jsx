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
      <div className="flex flex-wrap items-center justify-between px-4 lg:flex-nowrap xl:px-0">
        <div className="w-full text-center mt-[50px] lg:text-left lg:mt-0">
          <p className="text-[#2FCD71] text-[18px] sm:text-[20px] font-bold leading-7">
            Books Gallery
          </p>
          <h1 className="text-[32px] sm:text-[40px] font-semibold leading-[50px] my-5 sm:my-6 lg:py-8 lg:my-0">
            Discover Your Next <br className="hidden sm:block" /> Great Read
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
        <div className="w-full flex items-center justify-center lg:justify-end mt-14 lg:mt-3">
          <div className="max-w-[500px]">{View}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
