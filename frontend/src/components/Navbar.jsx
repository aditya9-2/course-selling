import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "./buttons/primaryBtn";
import InputBox from "./InputBox/InputBox";
import { IoMenuSharp } from "react-icons/io5";
import { sidebarState } from "../store/menuAtom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const setSidebarState = useSetRecoilState(sidebarState);
  const navigate = useNavigate();
  const auth = useAuth();

  const handleSignup = () => {
    navigate("/registration");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const toggleSidebar = () => {
    setSidebarState((prev) => !prev);
  };

  const getUserInitials = (email) => {
    if (!email) return "";
    return email.split("@")[0].substring(0, 2).toUpperCase();
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
        {auth?.user ? (
          <>
            <div className="bg-secondaryColor text-white font-semibold rounded-full w-12 h-12  flex items-center justify-center border">
              {getUserInitials(auth.user.email)}
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

export default Navbar;
