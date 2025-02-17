import { GraduationCap, ArrowRightFromLine, AlignRight } from "lucide-react";
import Button from "./Button";

import { useState } from "react";

const Navbar = () => {
  const [openHaburger, setOpenHamburger] = useState(false);

  const handleSignin = async () => {};
  const handleSignup = async () => {};

  const toggleHamburger = () => {
    setOpenHamburger(!openHaburger);
  };

  return (
    <div className="h-18 w-dvw bg-[#5A47AB] flex items-center justify-between p-4">
      <div className="logo flex gap-3">
        <span>
          <GraduationCap size={30} color={"#FBD15B"} />
        </span>
        <h1 className="text-[#FBD15B] text-2xl font-cursive">Course Arena</h1>
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
          <li className="hover:opacity-85 my-5">
            <a href="#">Home</a>
          </li>
          <li className="hover:opacity-85 my-5">
            <a href="#">About</a>
          </li>
          <li className="hover:opacity-85 my-5">
            <a href="#">Courses</a>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Button label={"Signup"} type={"border-btn"} onClick={handleSignup} />
        <Button label={"Signin"} onClick={handleSignin} />
      </div>

      {/* Hamburger logic */}
      <div
        className={`fixed top-12 right-0 w-full h-[calc(100vh-4.5rem)] bg-[#5A47AB] transform transition-transform duration-300 ease-in-out mt-5 z-20
          ${openHaburger ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <div className="text-2xl text-[#F2F2F2]">
          <ul className="p-4 mt-4">
            <li className="hover:opacity-85 my-5">
              <a href="#">Home</a>
            </li>
            <li className="hover:opacity-85 my-5">
              <a href="#">About</a>
            </li>
            <li className="hover:opacity-85 my-5">
              <a href="#">Courses</a>
            </li>
          </ul>
        </div>

        <div className="absolute bottom-18 right-20 p-4 flex  items-center gap-5">
          <Button label={"Signup"} type={"border-btn"} onclick={handleSignup} />
          <Button label={"Signin"} onclick={handleSignin} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
