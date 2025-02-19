/* eslint-disable react/prop-types */

import SecondaryBtn from "./secondaryBtn";
const CourseCard = ({ title, subtitle, price, img, onClick, BtnLabel }) => {
  return (
    <div className="bg-white h-84 min-h-[400px] w-80  rounded shadow-xl border border-gray-600 flex flex-col">
      <img src={img} alt="" className="w-full h-40 object-cover rounded-t" />

      <h3 className="text-xl font-semibold mt-2 text-center">{title}</h3>

      <p className="text-sm text-gray-600 mt-2 px-5">
        {subtitle.length > 80 ? `${subtitle.slice(0, 80)}...` : subtitle}
      </p>
      <p className="text-xl font-bold px-5 pt-4 text-[#39229A] mt-2">
        ₹{price}
      </p>

      <div className="px-4 mt-auto py-4 flex justify-center">
        <SecondaryBtn label={BtnLabel} onClick={onClick} />
      </div>
    </div>
  );
};

export default CourseCard;
