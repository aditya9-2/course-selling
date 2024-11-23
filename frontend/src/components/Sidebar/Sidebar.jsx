import { IoMdHome } from "react-icons/io";
import { IoSchool } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="side-bar-height bg-sidebarColor  w-1/2 md:w-80 ">
      <div>
        <h2 className="ml-11 pt-10 font-bold text-gray-500">MAIN MENU</h2>
      </div>

      <div className="flex flex-col gap-7 p-11 list-none font-bold text-gray-700">
        <li className="flex items-center gap-2">
          <IoMdHome className="text-xl" />
          <a href="#" className="text-xl">
            Home
          </a>
        </li>
        <li className="flex items-center gap-2">
          <IoSchool className="text-xl" />
          <a href="#" className="text-xl">
            Courses
          </a>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
