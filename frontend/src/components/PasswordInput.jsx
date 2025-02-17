/* eslint-disable react/prop-types */
import { EyeClosed, Eye } from "lucide-react";
import { forwardRef, useState } from "react";

const PasswordInput = forwardRef(({ placeholder }, ref) => {
  // `ref` should be the first argument
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-full">
      <input
        ref={ref}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        required
        className="w-full h-7 md:h-10 rounded p-3 pr-10 border border-slate-50 text-white text-sm outline-none bg-transparent"
      />

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
});

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
