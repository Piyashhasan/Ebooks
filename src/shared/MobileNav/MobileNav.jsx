import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const MobileNav = ({ toggleMobileMenu, setToggleMobileMenu }) => {
  return (
    <div className={`overly-effect ${toggleMobileMenu ? "open" : "close"}`}>
      <div
        onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
        className="flex justify-end"
      >
        <ImCross className="text-2xl cursor-pointer text-[#0d0e43] mr-[19px] mt-[2px]" />
      </div>
      <div className="py-20">
        <ul className="flex flex-col items-center justify-center gap-8 text-[24px]">
          <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
            <Link className="py-3 px-8 text-white" to="/">
              Home
            </Link>
          </li>

          <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
            <Link className="py-3 px-8 text-white" to="/books">
              Books
            </Link>
          </li>

          <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
            <Link className="py-3 px-8 text-white" to="/wishlist">
              Wishlist
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
