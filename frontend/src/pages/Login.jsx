import React, { useRef, useState } from "react";
import PrimaryBtn from "../components/buttons/primaryBtn";
import AuthInputBox from "../components/InputBox/AuthInputBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BE_USER_URL } from "../config/config";

const Login = () => {
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [error, setError] = useState(null);

  const handleNavigation = () => {
    navigate("/user/registration");
  };

  const handleLogin = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(email, password);

    try {
      if (!email) {
        setError("Please enter your email");
        setTimeout(() => setError(null), 3000);
        return;
      }

      if (!password) {
        setError("Please enter your password");
        setTimeout(() => setError(null), 3000);
        return;
      }

      const response = await axios.post(`${BE_USER_URL}/user-login`, {
        email,
        password: password,
      });

      const { accessToken } = response.data;

      localStorage.setItem("token", accessToken);

      if (response.data && accessToken) {
        navigate("/user/home");
        alert("Login Successfull");
      }
    } catch (error) {
      console.log("Unexpected error", error.message);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-600 bg-opacity-60 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="font-semibold text-black text-xl">Login here:</h2>
        <div>
          <AuthInputBox ref={emailRef} type="text" placeholder="Enter Email" />
          <AuthInputBox
            ref={passwordRef}
            type="password"
            placeholder="Enter Password"
          />
        </div>
        {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
        <div className="mt-5">
          <PrimaryBtn type="Login" onclick={handleLogin} />
        </div>
        <div className="mt-3 p-2">
          <p>
            Dont have an account?{" "}
            <span
              className="text-blue-400 cursor-pointer hover:underline"
              onClick={handleNavigation}
            >
              Register yourslef here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
