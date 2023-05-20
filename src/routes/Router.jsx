import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import SpecificToy from "../pages/SpecificToy/SpecificToy";

/* 
color for UI
paste - #C2E0EB
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
        element: <SpecificToy />,
        loader: ({ params }) =>
          fetch(`https://kiddu-com-server.vercel.app/toy/${params.id}`),
      },
    ],
  },
]);
export default router;
