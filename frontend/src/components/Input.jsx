/* eslint-disable react/prop-types */
const Input = ({ type, placeholder }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        required
        className="h-7 md:h-10 rounded p-2 border border-slate-50 text-white text-sm outline-0"
      />
    </>
  );
};

export default Input;
