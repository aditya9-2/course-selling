import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async () => {
    // Signup Logic
  };

  return (
    <div className="h-screen bg-[#39229A] flex justify-center">
      <div className="bg-transparent border border-slate-50 w-60 md:w-96 h-96 md:h-[28rem] rounded-xl mt-30">
        <div className="p-3">
          <h2 className="text-[#FBD15B] text-xl md:text-4xl text-center mb-5.5">
            Signup here
          </h2>
          <p className="text-white text-sm md:text-xl flex flex-col gap-2 mb-4">
            Enter your name:
            <Input type={"text"} placeholder={"Your Name"} />
          </p>
          <p className="text-white text-sm md:text-xl flex flex-col gap-2 mb-4">
            Enter your Email:
            <Input type={"email"} placeholder={"Your Email"} />
          </p>
          <p className="text-white text-sm md:text-xl flex flex-col gap-2">
            Create your Password:
            <PasswordInput placeholder={"Your Password"} />
          </p>
        </div>
        <div className="p-3">
          <Button label={"Signup"} onclick={handleSignup} />
        </div>
        <p className="text-white text-sm text-center">
          Already Have an Acoount?{" "}
          <span
            className="text-[#FBD15B] hover:opacity-80 cursor-pointer"
            onClick={() => navigate("/signin")}
          >
            Signin here
            <span />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
