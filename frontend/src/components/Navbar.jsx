import { useSetRecoilState } from "recoil";
import PrimaryBtn from "./buttons/primaryBtn";
import InputBox from "./InputBox/InputBox";
import { IoMenuSharp } from "react-icons/io5";
import { sidebarState } from "../store/menuAtom";

const Navbar = () => {
  const setSidebarState = useSetRecoilState(sidebarState);

  const handleSignup = () => {
    // signup logic
  };

  const handleLogin = () => {
    // login logic
  };

  const toggleSidebar = () => {
    console.log(`clicked`);
    setSidebarState((prev) => !prev);
  };

  return (
    <div className="bg-white flex justify-between items-center p-4 h-16 shadow-lg fixed top-0 w-full z-50">
      <IoMenuSharp
        className="sm:hidden text-3xl cursor-pointer"
        onClick={toggleSidebar}
      />
      <div className="font-mynerve text-2xl font-bold text-blue-900">
        CourseNest<span className="text-pink-500">.</span>
      </div>
      <div className="hidden md:flex md:items-center md:gap-4">
        <InputBox type={"text"} Placeholder={"Type here to search"} />
        <PrimaryBtn type={"Register"} onclick={handleSignup} />
        <PrimaryBtn type={"Login"} onclick={handleLogin} />
      </div>
    </div>
  );
};

export default Navbar;
