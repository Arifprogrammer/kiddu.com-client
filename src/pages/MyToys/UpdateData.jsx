/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateData = () => {
  //* hooks
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleUpdateData = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyName = form.name.value;
    const toyPhoto = form.photo.value;
    const price = parseInt(form.price.value);
    const quantity = parseInt(form.quantity.value);
    const description = form.description.value;
    const update = { toyName, toyPhoto, price, quantity, description };
    console.log(update);

    const loadNewData = async () => {
      const response = await fetch(`http://localhost:5000/my_toys/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(update),
      });
      const data = await response.json();
      toast.success("You've successfully updated your product", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/my_toys");
      }, 2000);
    };
    loadNewData();
  };

  useEffect(() => {
    const loadSpecificData = async () => {
      const response = await fetch(`http://localhost:5000/toy/${id}`);
      const data = await response.json();
      setData(data);
      console.log(data);
    };
    loadSpecificData();
  }, []);
  return (
    <section className="mt-12 lg:my-20">
      <div className="my-container">
        <div className="card card1 w-[95%] lg:w-[50%] bg-white mx-auto my-16 lg:mt-16">
          <form onSubmit={handleUpdateData} className="card-body p-5 lg:p-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold text-base">
                  Product Name
                </span>
              </label>
              <input
                defaultValue={data.toyName}
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
                defaultValue={data.toyPhoto}
                name="photo"
                type="text"
                className="input input-bordered bg-[#C2E0EB] text-black font-semibold"
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-evenly">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold text-base">
                    Price
                  </span>
                </label>
                <input
                  defaultValue={data.price}
                  name="price"
                  type="text"
                  className="input input-bordered bg-[#C2E0EB] text-black font-semibold"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold text-base">
                    Quantity
                  </span>
                </label>
                <input
                  defaultValue={data.quantity}
                  name="quantity"
                  type="text"
                  className="input input-bordered bg-[#C2E0EB] text-black font-semibold"
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
                defaultValue={data.description}
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

export default UpdateData;
