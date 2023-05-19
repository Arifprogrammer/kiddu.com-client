import { Outlet } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import Header from "../shared/Header/Header";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
      <ScrollToTop />
    </>
  );
};

export default HomeLayout;
