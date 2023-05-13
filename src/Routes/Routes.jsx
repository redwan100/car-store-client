import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Shared/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Login/SignUp";
import BookService from "../Components/Services/BookService";
import { Bookings } from "../Pages/Bookings/Bookings";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import About from "../Pages/About";

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
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "bookService/:id",
        element: (
          <PrivetRoute>
            <BookService />,
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://car-store-server.vercel.app/services/${params.id}`),
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
    ],
  },
]);

export default router;
