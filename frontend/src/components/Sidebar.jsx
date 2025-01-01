import { LuHome } from "react-icons/lu";
import { RiGraduationCapFill } from "react-icons/ri";
import PrimaryBtn from "./buttons/primaryBtn";
import { useRecoilValue } from "recoil";
import { sidebarState } from "../store/menuAtom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { FaDownload } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {
  const isSidebarOpen = useRecoilValue(sidebarState);
  const [activeLink, setActiveLink] = useState("Home");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  const handleSignup = () => {
    navigate("/registration");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    auth?.logout();
    navigate("/");
  };

  const getUserInitials = (email) => {
    if (!email) return "";
    const response = email.split("@")[0].substring(0, 2).toUpperCase();
    console.log("name:", response);
    return response;
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
        {auth?.user ? (
          <>
            <hr className="bg-gray-500 w-full  rounded-full" />
            <div className="flex gap-4 items-center text-gray-600 font-semibold cursor-pointer">
              <FaDownload />
              <span>Purchases</span>
            </div>

            <div className="flex gap-4 items-center text-gray-600 font-semibold cursor-pointer">
              <IoSettings />
              <span>Settings</span>
            </div>

            <div className="flex gap-4 items-center text-gray-600 font-semibold cursor-pointer">
              <LuLogOut />
              <span className="" onClick={handleLogout}>
                Logout
              </span>
            </div>
          </>
        ) : (
          <>
            <PrimaryBtn type={"Register"} onclick={handleSignup} />
            <PrimaryBtn type={"Login"} onclick={handleLogin} />
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
