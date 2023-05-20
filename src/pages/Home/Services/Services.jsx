import { FaTruck, FaClock, FaMoneyCheckAlt } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <div className="border-4 border-[#F261C2] hover:border-[#65cbf0] py-8 px-4 lg:p-10 text-center space-y-4 rounded-md">
        <FaTruck className="text-7xl mx-auto text-[#65cbf0] hover:text-[#F261C2]" />
        <p className="font-bold text-3xl tracking-widest">Free Shipping</p>
        <p>
          {" "}
          Free Shipping on Every Toy Order! Discover a hassle-free shopping
          experience with our toy marketplace where every purchase comes with
          the added benefit of free shipping. Shop to your heart's content,
          knowing that your desired toys will be delivered right to your
          doorstep without any extra cost. Say goodbye to shipping fees and
          embrace the convenience of receiving your toys with no strings
          attached. Start exploring our wide selection of toys today and take
          advantage of our fantastic free shipping service.
        </p>
      </div>
      <div className="border-4 border-[#65cbf0] py-8 px-4 lg:p-10 text-center space-y-4 rounded-md">
        <FaClock className="text-7xl mx-auto text-[#F261C2]" />
        <p className="font-bold text-3xl tracking-widest">Support 24/7</p>
        <p>
          Experience Unparalleled 24/7 Support! At our toy marketplace, customer
          satisfaction is our top priority. That's why we offer dedicated
          support available 24 hours a day, 7 days a week. Whether you have a
          question, need assistance with an order, or require any kind of help,
          our friendly and knowledgeable support team is always here to assist
          you. Rest easy knowing that no matter the time, we're just a click or
          call away, ready to provide prompt and reliable assistance. Shop with
          confidence on our toy marketplace, knowing that exceptional support is
          just a moment away.
        </p>
      </div>
      <div className="border-4 border-[#F261C2] hover:border-[#65cbf0] py-8 px-4 lg:p-10 text-center space-y-4 rounded-md">
        <FaMoneyCheckAlt className="text-7xl mx-auto text-[#65cbf0] hover:text-[#F261C2]" />
        <p className="font-bold text-3xl tracking-widest">Money Return</p>
        <p>
          Hassle-Free Money Return Service! We understand that sometimes things
          may not go as planned. That's why we offer a hassle-free money return
          service on our toy marketplace. If you're not completely satisfied
          with your purchase, simply let us know, and we'll guide you through
          the easy return process. Our aim is to ensure your peace of mind and
          provide a seamless shopping experience. With our money return service,
          you can shop confidently, knowing that your satisfaction is our utmost
          priority. Discover our wide range of toys today, risk-free!
        </p>
      </div>
    </>
  );
};

export default Services;
