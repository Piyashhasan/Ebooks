import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Books from "../pages/Books/Books";
import MainLayout from "../layouts/MainLayout/MainLayout";
import BookDetails from "../pages/BookDetails/BookDetails";
import NotFound from "../pages/NotFound/NotFound";
import Wishlist from "../pages/Wishlist/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
