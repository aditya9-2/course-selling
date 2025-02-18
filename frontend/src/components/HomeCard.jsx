/* eslint-disable react/prop-types */

const HomeCard = ({ icon, heading, subHeading }) => {
  return (
    <div className="h-auto w-60 md:w-80 md:mt-10">
      <div className="flex flex-col items-center px-2 py-5">
        <img src={icon} alt="" className="w-10" />
        <h3 className="text-center text-[#5A47AB] mt-3 font-semibold md:text-xl">
          {heading}
        </h3>
        <p className="text-center mt-4 text-gray-500 text-sm">{subHeading}</p>
      </div>
    </div>
  );
};

export default HomeCard;
