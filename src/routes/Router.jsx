import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import SpecificToy from "../pages/SpecificToy/SpecificToy";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import UpdateData from "../pages/MyToys/UpdateData";
import AddNewToy from "../pages/AddNewToy/AddNewToy";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

/* 
color for UI
paste - #C2E0EB
deep paste - #65cbf0
Pink - #F6C6EA
deep pink - #F261C2
bg -#F9F9F9
footer - #CAD4E6
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <SpecificToy />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/toys",
        element: <AllToys />,
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "/my_toys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/my_toys/:id",
        element: <UpdateData />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/my_toys/${params.id}`),
      },
      {
        path: "/toy/new",
        element: (
          <PrivateRoute>
            <AddNewToy />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
