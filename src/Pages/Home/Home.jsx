import AboutUs from "../About Us/AboutUs";
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
    </div>
  );
};

export default Home;
