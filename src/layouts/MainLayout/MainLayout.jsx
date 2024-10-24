import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../shared/NavBar/NavBar";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { resetCurrentPage } from "../../features/books/bookSlice";

const MainLayout = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const previousPath = useRef(location.pathname);

  useEffect(() => {
    if (previousPath.current === "/books" && location.pathname !== "/books") {
      console.log("trigger");
      dispatch(resetCurrentPage());
    }
    previousPath.current = location.pathname;
  }, [dispatch, location.pathname]);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
