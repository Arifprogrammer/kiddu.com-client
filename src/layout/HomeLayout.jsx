import { Outlet } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default HomeLayout;
