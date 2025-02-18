/* eslint-disable react/prop-types */

import Button from "./Button";
const Hero = ({
  label,
  sublabel,
  image,
  color = "bg-[#5A47AB]",
  txtClr = "text-[#FBD15B]",
  subTxtColor = "text-[#F2F2F2]",
  onClick,
}) => {
  return (
    <div className={`h-auto md:h-[25.5rem] ${color} py-4 px-4 md:px-14`}>
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-center  gap-5 ">
        <div
          className={`${txtClr} text-wrap md:text-nowrap leading-6 md:leading-0`}
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            {" "}
            {label}
          </h1>
          <p
            className={`font-thin ${subTxtColor} text-sm md:text-xl text-justify`}
          >
            {sublabel}
          </p>
        </div>
        <div className="w-65 md:w-96">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="mt-10 md:mt-0 relative md:bottom-10">
        <Button label={"Explore now"} width={"md:w-54"} onClick={onClick} />
      </div>
    </div>
  );
};

export default Hero;
