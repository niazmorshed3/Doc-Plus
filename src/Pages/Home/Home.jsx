import AboutUs from "../About Us/AboutUs";
import AppoimentOffer from "../Appoimnet Offer/AppoimentOffer";
import Banner from "../Banner/Banner";
import CareForPatient from "../Care For Every Patient/CareForPatient";
import EmpoweringHealth from "../Empowering Health/EmpoweringHealth";
import Faq from "../FAQ/Faq";
import GetSolutions from "../Get Solutions/GetSolutions";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CareForPatient></CareForPatient>
      <GetSolutions></GetSolutions>
      <EmpoweringHealth></EmpoweringHealth>
      <AboutUs></AboutUs>
      <Faq></Faq>
      <AppoimentOffer></AppoimentOffer>
    </div>
  );
};

export default Home;
