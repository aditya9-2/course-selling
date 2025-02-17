/* eslint-disable react/prop-types */
const Button = ({ type, label, onclick }) => {
  return (
    <div
      onClick={onclick}
      className={`px-6 py-2 rounded cursor-pointer hover:opacity-90 
         ${
           type === "border-btn" ? "border border-white text-white" : "bg-white"
         }`}
    >
      {label}
    </div>
  );
};

export default Button;
