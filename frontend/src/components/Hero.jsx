/* eslint-disable react/prop-types */

import Button from "./Button";
const Hero = ({
  label,
  sublabel,
  image,
  color = "bg-[#5A47AB]",
  txtClr = "text-[#F2F2F2]",
}) => {
  return (
    <div className={`h-75 md:h-[24rem] ${color} py-4 px-4 md:px-14`}>
      <div className="flex justify-between items-center  gap-5 ">
        <div
          className={`${txtClr} text-wrap md:text-nowrap leading-6 md:leading-0`}
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            {" "}
            {label}
          </h1>
          <p className="text-thin text-sm md:text-xl text-justify">
            {sublabel}
          </p>
        </div>
        <div className="w-96 md:w-74">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="mt-10 md:mt-0">
        <Button label={"Explore now"} width={"w-34 md:w-54"} />
      </div>
    </div>
  );
};

export default Hero;
