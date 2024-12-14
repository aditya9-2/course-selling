import React, { forwardRef } from "react";

const AuthInputBox = forwardRef(({ type, placeholder }, ref) => {
  return (
    <div>
      <input
        className="px-4 py-2 rounded-md bg-gray-50 mt-2 mb-2 border border-slate-300 outline-none w-full"
        type={type}
        placeholder={placeholder}
        ref={ref} // Forwarding the ref to the input element
      />
    </div>
  );
});

export default AuthInputBox;
