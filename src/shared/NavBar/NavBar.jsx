import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/icon.png";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "../MobileNav/MobileNav";

const NavBar = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className="wrapper">
        <div className="flex items-center justify-between py-[10px] px-4 xl:px-0">
          {/* --- logo side start --- */}
          <Link to="/">
            <div className="flex items-center gap-3">
              <div>
                <img className="w-[50px] h-auto" src={logo} alt="logo" />
              </div>
              <h3 className="text-[28px] font-semibold text-[#2FCD71]">
                Books
              </h3>
            </div>
          </Link>
          {/* --- logo side end --- */}

          {/* --- nav link start --- */}
          <div className="hidden sm:block">
            <ul className="flex items-center gap-10 text-[20px] font-semibold text-[#2FCD71]">
              <li className="hover:text-green-600">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-green-500" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:text-green-600">
                <NavLink
                  to="/books"
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-green-500" : ""
                  }
                >
                  Books
                </NavLink>
              </li>
              <li className="hover:text-green-600">
                <NavLink
                  to="/wishlist"
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-green-500" : ""
                  }
                >
                  Wishlist
                </NavLink>
              </li>
            </ul>
          </div>
          {/* --- nav link end --- */}

          {/* --- toggle button --- */}
          <div
            className="sm:hidden"
            onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
          >
            <GiHamburgerMenu className="text-3xl cursor-pointer text-[#0d0e43" />
          </div>
          {/* --- toggle button --- */}
        </div>

        {/* --- mobile menu start --- */}
        <MobileNav
          toggleMobileMenu={toggleMobileMenu}
          setToggleMobileMenu={setToggleMobileMenu}
        />
        {/* --- mobile menu end --- */}
      </div>
    </nav>
  );
};

export default NavBar;
