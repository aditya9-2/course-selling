/* eslint-disable react/prop-types */
const PrimaryBtn = ({ type, onclick }) => {
  return (
    <div
      className={`bg-secondaryColor text-white  px-4 py-2 rounded-full text-center cursor-pointer transition transform active:scale-95 hover:opacity-90`}
      onClick={onclick}
    >
      {type}
    </div>
  );
};

export default PrimaryBtn;
