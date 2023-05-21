import { Outlet, useLocation, useNavigation } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import { useEffect } from "react";

const HomeLayout = () => {
  //* hooks
  const { pathname } = useLocation();

  //* useEffects
  useEffect(() => {
    if (pathname === "/") {
      document.title = `Kiddu.com | Home`;
    } else {
      const newPath = pathname.split("/");
      document.title = `Kiddu.com | ${newPath[1].toUpperCase()}`;
    }
  }, [pathname]);

  const navigation = useNavigation();
  return (
    <>
      <Header />
      {navigation.state === "loading" ? (
        <div className="min-h-[80vh] flex justify-center  items-center px-4 lg:px-0">
          <progress className="progress max-w-[256px]"></progress>
        </div>
      ) : (
        <div className="min-h-[80vh]">
          <Outlet />
        </div>
      )}
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default HomeLayout;
