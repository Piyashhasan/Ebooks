import { Link } from "react-router-dom";
// import logo from "../../assets/images/icon.svg";
import logo from "../../assets/images/icon.png";

const NavBar = () => {
  return (
    <nav className="wrapper">
      <div className="flex items-center justify-between py-4">
        {/* --- logo side start --- */}
        <Link to="/">
          <div className="flex items-center gap-3">
            <div>
              <img className="w-[50px] h-auto" src={logo} alt="logo" />
            </div>
            <h3 className="text-[28px] font-semibold text-[#2FCD71]">Books</h3>
          </div>
        </Link>
        {/* --- logo side end --- */}

        {/* --- nav link start --- */}
        <div>
          <ul className="flex items-center gap-10 text-[20px] font-semibold text-[#2FCD71]">
            <li className="hover:text-green-600">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-green-600">
              <Link to="/books">Books</Link>
            </li>
            <li className="hover:text-green-600">
              <Link to="/wishlist">Wishlist</Link>
            </li>
          </ul>
        </div>
        {/* --- nav link end --- */}
      </div>
    </nav>
  );
};

export default NavBar;
