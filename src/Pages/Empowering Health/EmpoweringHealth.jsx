import at from "../../../public/Rectangle 27-2.png";
import odm from "../../../public/Rectangle 27-1.png";
import cyh from "../../../public/Rectangle 27.png";
import { MdArrowOutward } from "react-icons/md";
const EmpoweringHealth = () => {
  return (
    <div>
      <div className="pb-2 ">
        <button className="btn btn-outline rounded-full">Who we are</button>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold">
            Empowering Health, <br /> Enriching Lives
          </h1>
          <p className="font-normal text-base">
            We are committed to providing high-quality, compassionate care to
            every <br /> patient we serve. Whatever your healthcare needs may be, you
            can trust us <br /> to be your partner in health and wellness.
          </p>
          <br />
          <button className="my-28 btn btn-warning">
            Appointment{" "}
            <span className="text-xl">
              {" "}
              <MdArrowOutward></MdArrowOutward>{" "}
            </span>{" "}
          </button>
        </div>
        <div>
          <div className="relative">
            <img className="rounded-xl" src={at} alt="" />
          </div>
          <div className=" -my-52 ml-6 absolute rounded-xl w-1/5  p-6 bg-[#34317e] ">
            <h1 className="text-2xl font-semibold">Advanced Technology</h1>
            <br />
            <p className="text-md font-medium">
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="grid grid-cols-2">
        <div>
          <div className="relative">
            <img className="rounded-xl" src={odm} alt="" />
          </div>
          <div className=" -my-52 ml-6 absolute rounded-xl w-1/5  p-6 bg-[#34317e] ">
            <h1 className="text-2xl font-semibold">Online Doctor Meet</h1>
            <br />
            <p className="text-md font-medium">
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
          </div>
        </div>

        <div>
          <div className="relative">
            <img className="rounded-xl" src={cyh} alt="" />
          </div>
          <div className=" -my-52 ml-6 absolute rounded-xl w-1/5  p-6 bg-[#34317e] ">
            <h1 className="text-2xl font-semibold">Consultancy your health</h1>
            <br />
            <p className="text-md font-medium">
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpoweringHealth;
