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
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <p>about</p>,
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
        loader: ({ params }) =>
          fetch(`https://kiddu-com-server.vercel.app/toy/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/toys",
        element: <AllToys />,
        loader: () => fetch("https://kiddu-com-server.vercel.app/toys"),
      },
      {
        path: "/my_toys",
        element: <MyToys />,
      },
      {
        path: "/my_toys/:id",
        element: <UpdateData />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/my_toys/${params.id}`),
      },
    ],
  },
]);
export default router;
