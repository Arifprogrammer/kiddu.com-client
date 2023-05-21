import { Outlet, useNavigation } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const HomeLayout = () => {
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
