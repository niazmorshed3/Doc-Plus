import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../.../../../../public/logo light.png";
const Footer = () => {
  return (
    <div className="footer sm: p-2 md:flex md:justify-around md:items-center text-white">
      <div className="text-base font-sm ">
        <img src={logo} alt="" />
        <br />
        <h1>123 Main Street Anytown, USA</h1>
        <p>Postal Code: 12345</p>
        <p>Support: support@oyolloo.com</p>
        <p>Available : 10:00am to 07:00pm</p>
      </div>
      <div>
        <h1 className="text-base font-sm">Home</h1>
        <p className="text-base font-sm">About Us</p>
        <p className="text-base font-sm">Success Page</p>
        <p className="text-base font-sm">Terms And Conditions</p>
      </div>
      <div className="text-xl font-semibold">
        <p>Follow Us</p>
        <div className="flex gap-2">
          <FaFacebook></FaFacebook>
          <FaInstagram></FaInstagram>
          <FaTwitter></FaTwitter>
          <FaGithub></FaGithub>
        </div>
      </div>
      <div>
        <p className="text-base font-sm">Service</p>
        <p className="text-base font-sm">Contact Us</p>
        <p className="text-base font-sm">Scheduling</p>
        <p className="text-base font-sm"> Patient Portal</p>
      </div>
    </div>
  );
};

export default Footer;
