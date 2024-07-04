import logo from "../.../../../../public/logo light.png";
import { MdArrowOutward } from "react-icons/md";
const AppoimentOffer = () => {
  return (
    <section className="banner2">
      <div className="justify-end items-end flex">
        <img className="p-4" src={logo} alt="" />
      </div>

      <section className="pt-24 relative">
        <div className="mx-4">
          <h1 className="text-4xl font-bold text-white">
            Get Your <br /> First Appointment <br /> at 50% Off!
          </h1>
          <br />
          <button className="btn  btn-warning mr-2">
            Appoinment{" "}
            <span className="text-xl">
              <MdArrowOutward />{" "}
            </span>
          </button>
          <button className="btn btn-outline text-white">
            Learn More{" "}
            <span className="text-xl">
              <MdArrowOutward />{" "}
            </span>
          </button>
        </div>
      </section>
    </section>
  );
};

export default AppoimentOffer;
