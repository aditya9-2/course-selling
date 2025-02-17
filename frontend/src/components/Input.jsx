import { forwardRef } from "react";

/* eslint-disable react/prop-types */
const Input = forwardRef(({ type, placeholder }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      required
      className="h-7 md:h-10 rounded p-2 border border-slate-50 text-white text-sm outline-0"
    />
  );
});

Input.displayName = "Input";

export default Input;
