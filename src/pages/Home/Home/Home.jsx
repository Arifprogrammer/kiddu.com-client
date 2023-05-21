import pic from "../../../assets/Banner/banner-latest.png";
import img1 from "../../../assets/Gallery/Resized/1.png";
import img2 from "../../../assets/Gallery/Resized/2.png";
import img3 from "../../../assets/Gallery/Resized/3.png";
import img4 from "../../../assets/Gallery/Resized/4.png";
import img5 from "../../../assets/Gallery/Resized/5.png";
import img6 from "../../../assets/Gallery/Resized/6.png";
import img7 from "../../../assets/Gallery/Resized/7.png";
import img8 from "../../../assets/Gallery/Resized/8.png";
import img9 from "../../../assets/Gallery/Resized/9.png";
import img10 from "../../../assets/Gallery/Resized/10.png";
import img11 from "../../../assets/Gallery/Resized/11.png";
import img12 from "../../../assets/Gallery/Resized/12.png";
import Categories from "../Categories/Categories";
import Trending from "../Trending/Trending";
import { useEffect, useState } from "react";
import Services from "../Services/Services";
import Aos from "aos";
import "aos/dist/aos.css";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const Home = () => {
  //* hooks
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Aos.init();
    const loadData = async () => {
      const response = await fetch(
        `http://localhost:5000/trending_toys?trending=true`
      );
      const data = await response.json();
      setProducts(data);
    };
    loadData();
  }, []);

  return (
    <>
      {/* banner section */}
      <section className="my-12 lg:h-[50rem]">
        <img src={pic} alt="" className="w-full h-full" />
      </section>
      {/* ------------------\\------------------------ */}

      {/* gallery section */}
      <section className="my-16 lg:my-24 px-4 lg:px-0">
        <div className="my-container text-center lg:text-left">
          <h1 className="text-gray-500 text-2xl lg:text-4xl font-extrabold tracking-widest">
            Glimpses of Delight!!
          </h1>
          <p className="text-[#9eb1d4] lg:text-xl font-semibold ml-1 tracking-tight pb-3">
            Watching Playing Kids is a Treat for the Eyes!
          </p>
          <div className="w-20 h-2 bg-[#F261C2] mx-auto lg:ml-0"></div>
        </div>
        <div
          className="my-container grid grid-cols-1 lg:grid-cols-4 gallery my-12 gap-3 lg:rounded-[25rem] lg:overflow-hidden lg:relative"
          data-aos="fade-up"
          data-aos-delay="40"
          data-aos-duration="2000"
        >
          <div className="absolute inset-0 bg-[#deebf0] mix-blend-multiply hidden lg:block"></div>
          {images.map((img, index) => (
            <img key={index} src={img} alt="" />
          ))}
        </div>
      </section>
      {/* -------------------\\----------------------- */}

      {/* shop by category section */}
      {
        <section className="my-16 lg:my-24 px-4 lg:px-0">
          <div className="my-container text-center lg:text-left">
            <h1 className="text-gray-500 text-2xl lg:text-4xl font-extrabold tracking-widest mb-3">
              Categories
            </h1>
            <div className="w-20 h-2 bg-[#F261C2] mx-auto lg:ml-0"></div>
          </div>
          <div className="my-container my-12">
            <Categories />
          </div>
        </section>
      }
      {/* -------------------\\----------------------- */}

      {/* trending toys section */}
      <section className="my-16 lg:my-24 px-5 lg:px-0">
        <div className="my-container text-center lg:text-left">
          <h1 className="text-gray-500 text-2xl lg:text-4xl font-extrabold tracking-widest">
            Trending
          </h1>
          <p className="text-[#9eb1d4] lg:text-xl font-semibold ml-1 tracking-tight pb-3">
            Toys
          </p>
          <div className="w-20 h-2 bg-[#F261C2] mx-auto lg:ml-0"></div>
        </div>
        <div className="my-container grid grid-cols-1 lg:grid-cols-3 gap-y-12 mt-12">
          {products.map((product) => (
            <Trending key={product._id} product={product} />
          ))}
        </div>
      </section>
      {/* -------------------\\----------------------- */}

      {/* service section */}
      <section className="my-16 lg:my-24 px-3 lg:px-0">
        <div className="my-container text-center lg:text-left">
          <h1 className="text-gray-500 text-2xl lg:text-4xl font-extrabold tracking-widest pb-3">
            Services
          </h1>
          <div className="w-20 h-2 bg-[#F261C2] mx-auto lg:ml-0"></div>
        </div>
        <div className="my-container flex flex-col lg:flex-row gap-4 mt-12">
          <Services />
        </div>
      </section>
    </>
  );
};

export default Home;
