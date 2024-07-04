import pie from "../../../public/pie-chart.png"
import cer from "../../../public/certificate.png"
import star from "../../../public/star.png"
import man from "../../../public/man.png"
import coin from "../../../public/coin.png"
import video from "../../../public/video-chat.png"
const CareForPatient = () => {
  return (
    <div className="my-12">
        <div className="flex justify-center">
        <h1 className="mt-20 absolute text-center text-5xl font-bold ">Comprehensive Care <br /> for Every Patient</h1>
        </div>
      <div className="relative flex justify-center gap-8 m-4 p-4">
        <div className="w-56 p-2 bg-gray-600  rounded-lg mt-16">
          <h1 className="text-start text-4xl font-bold">90%</h1>
          <p className="text-base font-semibold">Patient Satisfaction rate, reflecting our commitment</p>
          <div className="flex justify-center mt-20">
          <img className="max-w-32"  src={pie} alt="" />
          </div>
        </div>
        <div className="flex gap-6 mt-44">
          <div className="w-56 p-4 rounded-lg bg-gray-600 ">
            <h1 className="text-4xl font-semibold">500+</h1>
            <p className="text-base font-semibold">Board-certified doctors</p>
            <div className="flex justify-center mt-4">
            <img className="max-w-32" src={cer} alt="" />
            </div>
          </div>
          

          <div className="w-56 mt-4 p-2 rounded-lg bg-gray-600 ">
            <div className="flex justify-start items-center gap-2">
            <h1 className="text-4xl font-semibold">4.8</h1>
            <img className="max-w-8 " src={star} alt="" />
            </div>
            <p className="text-base font-semibold">Over 20,000 Patient</p>
            <div className="flex justify-center">
              <img className="max-w-32" src={man} alt="" />
            </div>
          </div>

          <div className=" w-56 p-2 rounded-lg bg-gray-600">
            <h1 className="text-4xl font-semibold">$5000</h1>
            <p className="text-base font-semibold">Money spend
            for poor patient</p>
            <div className="flex justify-center mt-4">
              <img className="max-w-28" src={coin} alt="" />
            </div>
          </div>
        </div>
        <div className="w-56 p-2 bg-gray-600  rounded-lg mt-16">
          <h1 className="text-4xl font-semibold">50+</h1>
          <p className="text-base font-semibold">Free lession video 
          for patient</p>
          <div className="flex justify-center mt-24">
            <img className="max-w-32" src={video} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareForPatient;
