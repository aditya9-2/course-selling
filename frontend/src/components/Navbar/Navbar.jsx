import { GiHamburgerMenu } from "react-icons/gi";
import { CgSearch } from "react-icons/cg";

import Button1 from "../buttons/button1";
import InputBox from "../Input/InputBox";

const Navbar = () => {
  const toggleBurger = () => {
    //hamburger logic here
  };

  const handleRegistration = () => {
    //registration logic
  };

  const handleLogin = () => {
    //login logic
  };

  return (
    <div className="w-full h-20 shadow-md flex justify-between p-4 items-center">
      <div className="flex items-center gap-6 ">
        <div>
          <GiHamburgerMenu
            className="text-4xl cursor-pointer block md:hidden"
            onClick={toggleBurger}
          />
        </div>
        <div className="text-2xl font-semibold">
          <a href="#" className="logo-font text-logoColor">
            CourseNest <span className="text-logoDot">.</span>
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <InputBox Type={`text`} Placeholder={`type here to search`} />
        <button className="md:block hidden  md:rounded-r-md md:bg-slate-100  md:py-3 md:px-4  md:border md:border-gray-300 md:outline-none md:text-xl mr-5">
          <CgSearch />
        </button>

        <div className="flex items-center gap-5">
          <Button1 name={`Regisrer`} onclick={handleRegistration} />
          <Button1 name={`Login`} onclick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
