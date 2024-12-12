/* eslint-disable react/prop-types */
import { CiSearch } from "react-icons/ci";

const InputBox = ({ type, Placeholder }) => {
  return (
    <div className="flex items-center justify-center">
      <input
        type={type}
        placeholder={Placeholder}
        className="p-2 rounded-l-full bg-gray-200 focus:outline-none border border-gray-300"
      />
      <button className="rounded-r-full p-3 bg-gray-200 border border-gray-300 transition transform active:scale-y-[.97] hover:bg-gray-300">
        <CiSearch />
      </button>
    </div>
  );
};

export default InputBox;
