/* eslint-disable react/prop-types */
const SecondaryBtn = ({ label, onCLick, width = "w-full" }) => {
  return (
    <button
      className={`${width} h-10 rounded-full bg-[#39229A] text-white mt-1 cursor-pointer hover:opacity-90`}
      onClick={onCLick}
    >
      {label}
    </button>
  );
};

export default SecondaryBtn;
