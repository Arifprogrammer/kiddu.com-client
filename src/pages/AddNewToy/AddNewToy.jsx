/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNewToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const sellerName = form.seller.value;
    const sellerEmail = form.email.value;
    const toyName = form.name.value;
    const toyPhoto = form.photo.value;
    const subCategory = form.category.value;
    const price = parseInt(form.price.value);
    const quantity = parseInt(form.quantity.value);
    const description = form.description.value;
    const ratings = parseInt(form.rating.value);
    toast.success("You've successfully added your product", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    const update = {
      toyName,
      toyPhoto,
      price,
      quantity,
      description,
      ratings,
      sellerName,
      sellerEmail,
      subCategory,
    };
    console.log(update);
    const addNewToy = async () => {
      const response = await fetch(`http://localhost:5000/toys`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(update),
      });
      const data = await response.json();
    };
    addNewToy();
    // e.target.reset();
  };

  return (
    <section className="my-12 lg:my-20">
      <div className="my-container">
        <div className="card card1 w-[95%] lg:w-[50%] bg-white mx-auto my-16 lg:mt-16">
          <form onSubmit={handleAddToy} className="card-body p-5 lg:p-8">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold text-base">
                    Name
                  </span>
                </label>
                <input
                  defaultValue={user?.displayName}
                  readOnly
                  name="seller"
                  type="name"
                  className="input input-bordered bg-[#C2E0EB] font-semibold text-gray-600 w-full"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold text-base">
                    Email
                  </span>
                </label>
                <input
                  defaultValue={user?.email}
                  readOnly
                  name="email"
                  type="email"
                  className="input input-bordered bg-[#C2E0EB] text-gray-600 font-semibold w-full"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold text-base">
                  Product Name
                </span>
              </label>
              <input
                name="name"
                type="name"
                className="input input-bordered bg-[#C2E0EB] text-black font-semibold"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold text-base">
                  Photo URL
                </span>
              </label>
              <input
                name="photo"
                type="text"
                className="input input-bordered bg-[#C2E0EB] text-black font-semibold"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold text-base">
                  Sub-Category
                </span>
              </label>
              <input
                name="category"
                type="text"
                className="input input-bordered bg-[#C2E0EB] text-black font-semibold"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold text-base">
                    Price
                  </span>
                </label>
                <input
                  name="price"
                  type="text"
                  className="w-full input input-bordered bg-[#C2E0EB] text-black font-semibold"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold text-base">
                    Quantity
                  </span>
                </label>
                <input
                  name="quantity"
                  type="text"
                  className="w-full input input-bordered bg-[#C2E0EB] text-black font-semibold"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold text-base">
                    Ratings
                  </span>
                </label>
                <input
                  name="rating"
                  type="text"
                  className="w-full input input-bordered bg-[#C2E0EB] text-black font-semibold"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold text-base">
                  Description
                </span>
              </label>
              <textarea
                name="description"
                cols="30"
                rows="10"
                className="input input-bordered bg-[#C2E0EB] text-black font-semibold h-36 pt-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white font-bold btn btn-primary"
            >
              Update
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default AddNewToy;
