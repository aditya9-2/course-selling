/* eslint-disable react/prop-types */
const Button1 = ({ name, onclick }) => {
  return (
    <div
      className="py-3 px-6 bg-primaryButton text-white rounded-lg cursor-pointer hover:opacity-80"
      onClick={onclick}
    >
      {name}
    </div>
  );
};

export default Button1;
