import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../components/buttons/primaryBtn";
import AuthInputBox from "../components/InputBox/AuthInputBox";
import { useRef, useState } from "react";
import axios from "axios";
import { BE_USER_URL } from "../config/config";

const Registration = () => {
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const [error, setError] = useState(null);

  const handleNavigation = () => {
    navigate("/user/login");
  };

  const handleSignup = async () => {
    const fullName = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      if (!fullName) {
        setError("Please Enter your Full name");
        setTimeout(() => setError(null), 3000);
        return;
      }

      if (!email) {
        setError("Please Enter your email");
        setTimeout(() => setError(null), 3000);
        return;
      }

      if (!password) {
        setError("Please Enter your password");
        setTimeout(() => setError(null), 3000);
        return;
      }

      const response = await axios.post(`${BE_USER_URL}/user-registration`, {
        fullName,
        email,
        password,
      });

      const tokenData = response.data.token;
      localStorage.setItem("token", tokenData);

      if (response.data && tokenData) {
        navigate("/user/login");
      }
    } catch (error) {
      console.log("Unexpected error", error.message);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-600 bg-opacity-60 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="font-semibold text-black text-xl">Register yourself:</h2>
        <div>
          <AuthInputBox
            ref={nameRef}
            type="text"
            placeholder="Enter Full name"
          />
          <AuthInputBox ref={emailRef} type="text" placeholder="Enter Email" />
          <AuthInputBox
            ref={passwordRef}
            type="password"
            placeholder="Enter Password"
          />
        </div>
        {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
        <div className="mt-5">
          <PrimaryBtn type="Registration" onclick={handleSignup} />
        </div>
        <div className="mt-3">
          <p>
            Already have an account?{" "}
            <span
              className="text-blue-400 cursor-pointer hover:underline"
              onClick={handleNavigation}
            >
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
