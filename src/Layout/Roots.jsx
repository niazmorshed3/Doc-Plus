import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";

const Roots = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto font-sourceSans">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Roots;
