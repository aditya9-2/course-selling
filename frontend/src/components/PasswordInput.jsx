/* eslint-disable react/prop-types */
import { EyeClosed, Eye } from "lucide-react";
import { useState } from "react";

const PasswordInput = ({ placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        required
        className="w-full h-7 md:h-10 rounded p-3 pr-10 border border-slate-50 text-white text-sm outline-none bg-transparent"
      />

      {/* Eye Icon Positioned Absolutely */}
      <div
        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
        onClick={toggleShowPassword}
      >
        {showPassword ? (
          <Eye size={15} className="text-white" />
        ) : (
          <EyeClosed size={15} className="text-slate-400" />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
