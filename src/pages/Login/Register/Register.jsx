/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  //* hooks
  const [error, setError] = useState("");
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state?.from?.pathname);
  const from = state?.from?.pathname || "/";

  //* functions
  const profileUpdate = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    if (password.length < 6) {
      setError("Your password should be at least 6 character");
      return;
    }
    register(email, password)
      .then((result) => {
        profileUpdate(result.user, name, photo);
        toast.success("You've successfully register your account", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        // console.log(result.user);
        e.target.reset();
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 2000);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  return (
    <>
      <div className="card card1 w-[95%] lg:w-[28%] bg-white mx-auto my-16 lg:mt-16">
        <form onSubmit={handleRegister} className="card-body p-5 lg:p-8">
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
              type="photo"
              placeholder="Type your photo url"
              required
              className="input input-bordered bg-[#C2E0EB] text-black font-semibold"
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
              className="input input-bordered bg-[#C2E0EB] text-black font-semibold"
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
              className="input input-bordered bg-[#C2E0EB] text-black font-semibold"
            />
            <p className="text-red-600 font-semibold mt-1">{error}</p>
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
