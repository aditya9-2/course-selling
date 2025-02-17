import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import { useRef, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "sonner";

const Signup = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignup = async () => {
    const fullName = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!fullName || !email || !password) {
      setError("All the fields are required");
      setTimeout(() => setError(""), 1500);
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/users/user-registration`,
        {
          fullName,
          email,
          password,
        }
      );

      const data = response.data;

      if (!data) {
        console.log(`registration faield`);
        toast.error("Registration Faield", {
          position: "bottom-right",
          duration: 1500,
          style: { backgroundColor: "red", color: "white" },
        });
      }
      toast.success("Registration Sucess", {
        position: "bottom-right",
        duration: 1500,
        style: { backgroundColor: "green", color: "white" },
      });

      setTimeout(() => {
        navigate("/signin");
      }, 1500);
    } catch (err) {
      console.log(`Error while Signup: ${err.message}`);
      toast.error(err?.response?.data?.message || "An error occurred", {
        position: "bottom-right",
        duration: 1500,
        style: { backgroundColor: "red", color: "white" },
      });
    }
  };

  return (
    <div className="h-screen bg-[#39229A] flex justify-center">
      <div className="bg-transparent border border-slate-50 w-60 md:w-96 h-96 md:h-[29rem] rounded-xl mt-30">
        <div className="p-3">
          <h2 className="text-[#FBD15B] text-xl md:text-4xl text-center mb-5.5">
            Signup here
          </h2>
          <div className="text-white text-sm md:text-xl flex flex-col gap-2 mb-4">
            Enter your name:
            <Input type={"text"} placeholder={"Your Name"} ref={nameRef} />
          </div>
          <div className="text-white text-sm md:text-xl flex flex-col gap-2 mb-4">
            Enter your Email:
            <Input type={"email"} placeholder={"Your Email"} ref={emailRef} />
          </div>
          <div className="text-white text-sm md:text-xl flex flex-col gap-2">
            Create your Password:
            <PasswordInput placeholder={"Your Password"} ref={passwordRef} />
          </div>
        </div>
        {error && (
          <p className="text-center text-sm text-red-400 mb-0">{error}</p>
        )}
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
      <Toaster />
    </div>
  );
};

export default Signup;
