/* eslint-disable react/prop-types */

const InputBox = ({ Type, Placeholder }) => {
  return (
    <div className="flex items-center ">
      <input
        type={Type}
        placeholder={Placeholder}
        className="md:w-64 md:rounded-l-md md:bg-slate-100  md:py-2 md:px-5  md:border md:border-gray-300 md:outline-none md:text-xl"
      />
    </div>
  );
};

export default InputBox;
