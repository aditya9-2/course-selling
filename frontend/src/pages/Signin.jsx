import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import { useRef, useState } from "react";
import { toast, Toaster } from "sonner";
import axios from "axios";

const Signin = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignin = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      setError("All the fields are required");
      setTimeout(() => setError(""), 1500);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Token Not Found", {
          position: "bottom-right",
          duration: 1500,
          style: { backgroundColor: "red", color: "white" },
        });
      }
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/users/user-login`,
        {
          email,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;

      if (!data) {
        toast.error("Signin Faield", {
          position: "bottom-right",
          duration: 1500,
          style: { backgroundColor: "red", color: "white" },
        });
      }
      toast.success("Signin Sucess", {
        position: "bottom-right",
        duration: 1500,
        style: { backgroundColor: "green", color: "white" },
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      console.log(`Error while Signin: ${err.message}`);
      toast.error(err?.response?.data?.message || "An error occurred", {
        position: "bottom-right",
        duration: 1500,
        style: { backgroundColor: "red", color: "white" },
      });
    }
  };

  return (
    <div className="h-screen bg-[#39229A] flex justify-center">
      <div className="bg-transparent border border-slate-50 w-60 md:w-96 h-73 md:h-90 rounded-xl mt-30">
        <div className="p-3">
          <h2 className="text-[#FBD15B] text-xl md:text-4xl text-center mb-5.5">
            Signin here
          </h2>

          <div className="text-white text-sm md:text-xl flex flex-col gap-2 mb-4">
            Enter your Email:
            <Input type={"email"} placeholder={"Your Email"} ref={emailRef} />
          </div>
          <div className="text-white text-sm md:text-xl flex flex-col gap-2">
            Enter your Password:
            <PasswordInput placeholder={"Your Password"} ref={passwordRef} />
          </div>
        </div>
        {error && (
          <p className="text-center text-sm text-red-400 mb-0">{error}</p>
        )}
        <div className="p-3">
          <Button label={"Signin"} onclick={handleSignin} />
        </div>
        <p className="text-white text-sm text-center">
          Already Have an Acoount?{" "}
          <span
            className="text-[#FBD15B] hover:opacity-80 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Signup here
            <span />
          </span>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default Signin;
