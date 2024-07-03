import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/ContextProvider";
import toast, { Toaster } from "react-hot-toast";
import logoLight from "../../../public/logo light.png";
import { MdArrowOutward } from "react-icons/md";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    toast.success("Logout Successfully");
    logOut()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const navLinks = (
    <>
      <li>
        <span className="text-base font-semibold">Home</span>
      </li>

      <li>
        <span className="text-base font-semibold">Service</span>
      </li>
      <li>
        <span className="text-base font-semibold">Blog</span>
      </li>
      <li>
        <span className="text-base font-semibold">About Us</span>
      </li>
    </>
  );
  return (
    
    <div className="navbar md:bg-base-100 md:mb-6 md:mt-6 sm: mb-28">
      <div className="navbar-start">
        <div className=" text-4xl">
          <NavLink to="/">
            <img src={logoLight} />
          </NavLink>
        </div>
      </div>
      <div className="navbar-center lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2">
        <button className="btn btn-outline">
          Appoinment{" "}
          <span className="text-2xl">
            {" "}
            <MdArrowOutward />{" "}
          </span>{" "}
        </button>
        {user ? (
          <div className="align-middle dropdown dropdown-end">
            <div>
              <button onClick={handleLogOut} className="btn">
                Logout
              </button>
            </div>
          </div>
        ) : (
          <>
            <NavLink to="/login">
              <button className="btn">Login</button>
            </NavLink>
          </>
        )}
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Navbar;
