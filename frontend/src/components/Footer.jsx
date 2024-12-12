import { FaXTwitter } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="absolute top-[150rem] md:top-[85rem] md:left-24 md:w-[-webkit-fill-available]  bg-sidebarColor rounded-t-3xl max-h-80">
      <div className="flex justify-around  gap-9 p-2 md:p-7">
        <div className="font-mynerve text-2xl md:text-3xl font-bold text-blue-900 ">
          CourseNest<span className="text-pink-500">.</span>
        </div>

        <div>
          <p className="font-bold text-black">Quick Links</p>
          <ul className="text-sm underline text-blue-500">
            <li className="mt-2">
              <a href="#">Terms & Conditions</a>
            </li>
            <li className="mt-2">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="mt-2">
              <a href="#">Refunds & Cancellation Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-2">Download App</p>
          <div>
            <img
              src="https://harkirat.classx.co.in/google-play.svg"
              alt="googleplay"
            />
            <div>
              <p className="text-black font-bold mt-2">Follow us</p>
              <div className=" flex items-center gap-2 mt-2">
                <FaXTwitter />
                <MdLocationOn />
                <IoLogoYoutube />
                <IoLogoInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="text-center font-mynerve font-bold text-2xl">
        Made by <span className="text-pink-500">Aditya</span> from cohort 3.0
      </h4>
    </div>
  );
};

export default Footer;
