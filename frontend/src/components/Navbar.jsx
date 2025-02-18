import { GraduationCap, ArrowRightFromLine, AlignRight } from "lucide-react";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openHaburger, setOpenHamburger] = useState(false);

  const navigate = useNavigate();

  const toggleHamburger = () => {
    setOpenHamburger(!openHaburger);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setOpenHamburger(false);
  };

  return (
    <div className="fixed top-0 left-0 z-20 h-18 w-full bg-[#5A47AB] flex items-center justify-between p-4 cursor-pointer">
      <div className="logo flex gap-3" onClick={() => handleNavigate("/")}>
        <span>
          <GraduationCap size={30} color={"#FBD15B"} />
        </span>
        <span className="text-[#FBD15B] text-2xl font-cursive">
          Course Arena
        </span>
      </div>

      {/* Hamburger */}
      <button className="md:hidden" onClick={toggleHamburger}>
        {openHaburger ? (
          <ArrowRightFromLine color="#F2F2F2" size={30} />
        ) : (
          <AlignRight color="#F2F2F2" size={30} />
        )}
      </button>

      <div className="hidden md:flex text-xl text-[#F2F2F2]">
        <ul className="flex justify-center items-center gap-13">
          <li className="hover:opacity-85 my-5" onClick={() => navigate("/")}>
            Home
          </li>
          <li
            className="hover:opacity-85 my-5"
            onClick={() => navigate("/about")}
          >
            About
          </li>
          <li
            className="hover:opacity-85 my-5"
            onClick={() => navigate("/courses")}
          >
            Courses
          </li>
        </ul>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Button
          label={"Signup"}
          type={"border-btn"}
          onClick={() => {
            navigate("/signup");
          }}
        />
        <Button
          label={"Signin"}
          onClick={() => {
            navigate("/signin");
          }}
        />
      </div>

      {/* Hamburger logic */}
      <div
        className={`fixed top-12 right-0 w-full h-[calc(100vh-4.5rem)] bg-[#5A47AB] transform transition-transform duration-300 ease-in-out mt-5 z-20
          ${openHaburger ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <div className="text-2xl text-[#F2F2F2]">
          <ul className="p-4 mt-4">
            <li
              className="hover:opacity-85 my-5"
              onClick={() => handleNavigate("/")}
            >
              Home
            </li>
            <li
              className="hover:opacity-85 my-5"
              onClick={() => handleNavigate("/about")}
            >
              About
            </li>
            <li
              className="hover:opacity-85 my-5"
              onClick={() => handleNavigate("/courses")}
            >
              Courses
            </li>
          </ul>
        </div>

        <div className="absolute bottom-18 right-20 p-4 flex  items-center gap-5">
          <Button
            label={"Signup"}
            type={"border-btn"}
            onClick={() => handleNavigate("/signup")}
          />
          <Button label={"Signin"} onClick={() => handleNavigate("/signin")} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
