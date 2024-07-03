import logo from "../.../../../../public/logo light.png"
const AppoimentOffer = () => {
  return (
    <section className="banner2">
      <section className="pt-24">
        <div className="flex w-full gap-4">
          <div className="w-1/2 border">
            <h1 className="text-4xl font-bold text-white">Get Your <br /> First Appointment <br /> at 50% Off!</h1>
            <br />
            <button className="btn  btn-warning mr-2">Appoinment</button>
            <button className="btn btn-outline text-white">Learn More</button>
          </div>
          <div className="w-1/2 border">
            <img src={logo} alt="" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default AppoimentOffer;


