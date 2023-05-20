import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Heart = (
  <path
    d="M433.5,67c-25.3-25.3-59-39.3-94.8-39.3s-69.6,14-94.9,39.4l-7.3,7.3l-7.5-7.5
    c-25.4-25.4-59.1-39.4-95-39.4c-35.8,0-69.4,13.9-94.7,39.3C13.9,92.2,0,125.9,0,161.7s14,69.5,39.4,94.8l182.7,182.7
    c3.8,3.8,9,6,14.5,6c5.4,0,10.6-2.2,14.5-6l182.2-182.4c25.4-25.4,39.3-59.1,39.4-94.9S458.8,92.4,433.5,67z M132.5,117.2
    c-23.9,0-43.4,19.5-43.4,43.4c0,11-8.9,19.9-19.9,19.9s-19.9-8.9-19.9-19.9c0-45.8,37.3-83.1,83.1-83.1c11,0,19.9,8.9,19.9,19.9
    C152.4,108.4,143.5,117.2,132.5,117.2z"
  />
); // Source: https://www.svgrepo.com/svg/40627/heart

const customStyles = {
  itemShapes: Heart,
  activeFillColor: "white",
  activeBoxColor: "#EC4899",
  inactiveFillColor: "white",
  inactiveBoxColor: "#FBCFE8",
};

const CategoryProducts = ({ product }) => {
  const { toyPhoto, toyName, price, ratings } = product;
  return (
    <>
      <div className="card lg:card-side bg-[#C2E0EB] shadow-xl py-5 lg:py-0">
        <figure>
          <img src={toyPhoto} alt="Album" className="w-full" />
        </figure>
        <div className="flex flex-col justify-center px-2 lg:px-4">
          <div className="space-y-5 text-center lg:text-left mt-4 lg:mt-0">
            <h2 className="text-2xl font-bold">{toyName}</h2>
            <p className="text-2xl font-extrabold font-mono">${price}</p>
            {
              <Rating
                style={{ maxWidth: 150 }}
                value={Math.floor(ratings)}
                readOnly
                itemStyles={customStyles}
                transition="position"
                radius="medium"
                spaceInside="large"
                spaceBetween="small"
                className="mx-auto lg:ml-0"
              />
            }
            <div className="">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;
