/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  return (
    <>
      <div className="card w-[95%] lg:w-[28%] bg-white mx-auto my-12 lg:mt-16">
        <form className="card-body p-5 lg:p-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black font-semibold text-base">
                Name
              </span>
            </label>
            <input
              name="name"
              type="name"
              placeholder="Type your name"
              required
              className="input input-bordered bg-[#ADE4DB] text-black font-semibold"
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
              type="photo"
              placeholder="Type your photo url"
              required
              className="input input-bordered bg-[#ADE4DB] text-black font-semibold"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black font-semibold text-base">
                Email
              </span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Type your email"
              required
              className="input input-bordered bg-[#ADE4DB] text-black font-semibold"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black font-semibold text-base">
                Password
              </span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Type your password"
              required
              className="input input-bordered bg-[#ADE4DB] text-black font-semibold"
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-[#F6C6EA] text-black border-0 hover:bg-[#B4E4FF] text-base lg:text-xl"
            >
              Register
            </button>
            <div className="flex items-center my-8">
              <div className="border-[1px] border-slate-700 w-full"></div>
              <p className="px-4 font-bold">Or</p>
              <div className="border-[1px] border-slate-700 w-full"></div>
            </div>
          </div>
          <p className="text-center font-semibold">
            Already have an account?{" "}
            <Link to="/signin" className="text-[#F261C2] font-bold">
              Login
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
