import pic from "../../../assets/Banner/banner-latest.png";

const Home = () => {
  return (
    <section className="bg-[#C2E0EB] my-12 lg:h-[50rem]">
      {/* <div className="my-container grid grid-cols-1 lg:grid-cols-2">
        <div></div>
        <div className="">
          <img src={pic} alt="" className="w-full" />
        </div>
      </div> */}
      <img src={pic} alt="" className="w-full h-full" />
    </section>
  );
};

export default Home;
