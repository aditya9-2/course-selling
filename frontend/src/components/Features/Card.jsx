import PrimaryBtn from "../buttons/primaryBtn";

const Card = ({ cardImage, title, price }) => {
  const handlesShowCourseDetails = () => {};

  return (
    <div className="border rounded-3xl shadow-md bg-white   mt-9 md:mt-2 border-zinc-400 w-[22rem] ">
      <img
        src={cardImage}
        alt="CardImage"
        className="w-full h-1/2 object-cover rounded-t-3xl"
      />

      <div className="p-2">
        <h3 className="text-lg text-black font-extrabold">{title}</h3>
        <p className="text-black  font-bold mt-10 mb-4">
          {" "}
          <span>&#8377;</span>
          {price}
        </p>
        <div className=" mb-4">
          <PrimaryBtn
            type={"View Details"}
            onclick={handlesShowCourseDetails}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
