import { LuHome } from "react-icons/lu";
import { RiGraduationCapFill } from "react-icons/ri";
import PrimaryBtn from "./buttons/primaryBtn";
import { useRecoilValue } from "recoil";
import { sidebarState } from "../store/menuAtom";
import { useState } from "react";

const Sidebar = () => {
  const isSidebarOpen = useRecoilValue(sidebarState);
  const [activeLink, setActiveLink] = useState("Home");

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div
      className={`fixed left-[-10px] h-screen bg-sidebarColor w-72 z-30 list-none p-10 transition-transform ease-in-out duration-500 ${
        isSidebarOpen ? "-translate-x-full" : "translate-x-1"
      }`}
    >
      <ul className="text-gray-600 font-semibold">
        <p className="mb-10">MAIN MENU</p>

        <li
          className={`flex items-center gap-2 mb-5  ${
            activeLink === "Home" ? "text-secondaryColor" : "text-gray-600"
          } `}
        >
          <LuHome />
          <a href="#" onClick={() => handleActiveLink("Home")}>
            Home
          </a>
        </li>

        <li
          className={`flex items-center gap-2 mb-12 ${
            activeLink === "Courses" ? "text-secondaryColor" : "text-gray-600"
          } `}
        >
          <RiGraduationCapFill />
          <a href="#" onClick={() => handleActiveLink("Courses")}>
            Courses
          </a>
        </li>
      </ul>
      <div className="flex flex-col gap-5 md:hidden">
        <PrimaryBtn type={"Register"} />
        <PrimaryBtn type={"Login"} />
      </div>
    </div>
  );
};

export default Sidebar;
