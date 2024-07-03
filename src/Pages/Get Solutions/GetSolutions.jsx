import rec24 from "../../../public/Rectangle 24.png";
import { MdArrowOutward } from "react-icons/md";
const GetSolutions = () => {
  return (
    <div className="min-h-screen">
        <button className="btn btn-outline rounded-full">Who we are</button>
      <div className="flex gap-10  p-4">
        <div className="w-1/2 ">
          <h1 className="text-3xl font-semibold">We Help To Get <br />
           Soultions</h1>
           <br />
          <p className="text-lg">
            We are proud to be a trusted healthcare provider in our community,
            and we look forward to serving you and your family with excellence,
            integrity, and compassion. Your health is our priority, and we are
            here for you every step of the way. We believe in treating each
            patient with dignity, respect, and empathy, ensuring that they
            receive the attention and care they deserve.
          </p>
          <button className=" mt-32 btn btn-warning">Learn More <span className="text-xl"> <MdArrowOutward /></span> </button>
        </div>
        <div className=" p-4">
          <div className="relative">
            <img src={rec24} />
          </div>
          <div className="-mt-32 -mx-16 absolute rounded-xl w-1/5  p-6 bg-[#343268] " >
            <h1 className="text-2xl font-semibold">Our mission is simple</h1>
            <br />
            <p className="text-md font-medium">
              To provide high-quality healthcare services that are accessible,
              personalized, and patient-centered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetSolutions;
