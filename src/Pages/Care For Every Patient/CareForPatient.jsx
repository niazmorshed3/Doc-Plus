const CareForPatient = () => {
  return (
    <div className="my-12">
        <div className="flex justify-center">
        <h1 className="mt-20 absolute text-center text-5xl font-bold ">Comprehensive Care <br /> for Every Patient</h1>
        </div>
      <div className="relative flex justify-center gap-8 min-h-96 m-4 p-4">
        <div className="w-56 border p-2 bg-white text-black rounded-lg">
          <h1 className="text-start text-4xl font-bold">90%</h1>
          <p className="text-xl font-semibold">Patient Satisfaction rate, reflecting our commitment</p>
          <img src="" alt="" />
        </div>
        <div className="flex gap-6 mt-44">
          <div className="w-56  border p-4 rounded-lg bg-white text-black">
            <h1>500+</h1>
            <p>Board-certified doctors</p>
            <img src="" alt="" />
          </div>
          

          <div className="w-56 border mt-4 p-2 rounded-lg bg-white text-black">
            <h1>4.8</h1>
            <p>Over 20,000 Patient</p>
          </div>

          <div className=" w-56 border p-2 rounded-lg bg-white text-black">
            <h1>$5000</h1>
            <p>Money spend
            for poor patient</p>
          </div>
        </div>
        <div className="w-56 border p-2 rounded-lg bg-white text-black">
          <h1>50+</h1>
          <p>Free lession video 
          for patient</p>
        </div>
      </div>
    </div>
  );
};

export default CareForPatient;
