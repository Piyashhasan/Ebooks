import logo from "../../assets/images/icon.png";

const Footer = () => {
  return (
    <footer className="bg-[#72CD71]">
      <div className="wrapper py-3 sm:py-6">
        <div className="flex items-center justify-center">
          <img className="max-w-[50px] sm:max-w-[60px]" src={logo} alt="logo" />
          <h2 className="text-white text-[28px] sm:text-[30px] font-bold">
            BOOKS
          </h2>
        </div>
        <p className="text-center mt-3 text-[18px] sm:text-[22px]">
          Made by <span className="text-white">Piyash Hasan</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
