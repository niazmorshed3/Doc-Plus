import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";

const Roots = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto font-sourceSans">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <div className="mt-12">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Roots;
