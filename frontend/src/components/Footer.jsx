import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="w-dvw bg-[#F2F2F2] h-60 fixed bottom-0">
      <div className="flex justify-between g-5 px-10 py-6">
        <div className="font-semibold" onClick={() => navigate("/")}>
          <span className="text-[#39229A] text-2xl md:text-5xl ">
            Course Arena
          </span>
        </div>

        <div>
          <h1 className="text-xl font-semibold mb-1 md:mb-4 text-[#39229A]">
            Quick Links
          </h1>
          <p>
            <a
              href="#"
              className="text-gray-500 cursor-pointer text-sm my-2 md:my-4"
            >
              Tearms & Comditions
            </a>
          </p>
          <p>
            <a
              href="#"
              className="text-gray-500 cursor-pointer text-sm my-2 md:my-4"
            >
              Privacy Policy
            </a>
          </p>
          <p>
            <a
              href="#"
              className="text-gray-500 cursor-pointer text-sm my-2 md:my-4"
            >
              Refunds and cancelations Policy
            </a>
          </p>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-center text-[#39229A]">
            Follow Us
          </h1>
          <p className=" cursor-pointer flex items-center justify-center gap-2 hover:text-gray-600">
            <FaXTwitter />
            <a href="">Twitter</a>
          </p>
          <p className="cursor-pointer flex items-center justify-center gap-2 hover:text-gray-600">
            <FaLinkedin />
            <a href="">LinkedIn</a>
          </p>
        </div>
      </div>
      <p className="text-center mt-6 font-semibold text-gray-600">
        &copy; All Rights reserved{" "}
        <span className="text-[#FBD15B] font-semibold">|</span> Made By{" "}
        <span className="font-cursive text-[#5A47AB] font-semibold">
          Aditya
        </span>
      </p>
    </div>
  );
};

export default Footer;
