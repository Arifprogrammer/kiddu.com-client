import { Link, NavLink } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/Kiddu-Logo-removebg.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  //* hooks
  const { user, logOut } = useContext(AuthContext);

  //* functions
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        toast.success("You've signed out successfully", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="navbar bg-transparent my-container lg:text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-100 rounded-box w-52 font-semibold"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-black bg-[#F261C2] font-semibold"
                    : "font-semibold"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/toys"
                className={({ isActive }) =>
                  isActive
                    ? "text-black bg-[#F261C2] font-semibold"
                    : "font-semibold"
                }
              >
                All Toys
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    to="/my_toys"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black bg-[#F261C2] font-semibold"
                        : "font-semibold"
                    }
                  >
                    My Toys
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/toy/new"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black bg-[#F261C2] font-semibold"
                        : "font-semibold"
                    }
                  >
                    Add A Toy
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "text-black bg-[#F261C2] font-semibold"
                    : "font-semibold"
                }
              >
                Blog
              </NavLink>
            </li>
            {user ? (
              <li className="lg:hidden">
                <button className="font-semibold" onClick={handleLogOut}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="lg:hidden">
                <NavLink
                  to="/signin"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black bg-[#F261C2] font-semibold"
                      : "font-semibold"
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <img src={logo} alt="" className="hidden lg:flex h-20 w-24" />
      </div>
      <div className="navbar-center">
        <img src={logo} alt="" className="lg:hidden h-20 w-24" />
        <ul className="menu menu-horizontal px-1 gap-3  hidden lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black bg-[#F261C2] font-semibold"
                  : "font-semibold hover:bg-[#F261C2] bg-[#F6C6EA] hover:text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/toys"
              className={({ isActive }) =>
                isActive
                  ? "text-black bg-[#F261C2] font-semibold"
                  : "font-semibold hover:bg-[#F261C2] bg-[#F6C6EA] hover:text-black"
              }
            >
              All Toys
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink
                  to="/my_toys"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black bg-[#F261C2] font-semibold"
                      : "font-semibold hover:bg-[#F261C2] bg-[#F6C6EA] hover:text-black"
                  }
                >
                  My Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/toy/new"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black bg-[#F261C2] font-semibold"
                      : "font-semibold hover:bg-[#F261C2] bg-[#F6C6EA] hover:text-black"
                  }
                >
                  Add A Toy
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-black bg-[#F261C2] font-semibold"
                  : "font-semibold hover:bg-[#F261C2] bg-[#F6C6EA] hover:text-black"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className=" hidden lg:flex items-center gap-6">
            <Link className="text-white text-2xl">
              <img
                src={user?.photoURL}
                alt=""
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                className="h-12 w-12 rounded-full"
              />
              <Tooltip id="my-tooltip" />
            </Link>{" "}
            <button
              className="py-3 px-8 font-semibold rounded-md text-black bg-[#C2E0EB]"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/signin"
            className="py-3 px-8 font-semibold rounded-md text-black bg-[#C2E0EB] hidden lg:flex"
          >
            Login
          </Link>
        )}
        {user && (
          <Link className="text-white text-2xl pr-4 lg:hidden">
            <img
              src={user?.photoURL}
              alt=""
              className="h-12 w-12 rounded-full"
            />
          </Link>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Header;
