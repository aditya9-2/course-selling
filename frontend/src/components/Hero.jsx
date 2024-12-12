import { useEffect, useState } from "react";

const carouselItems = [
  "https://appxcontent.kaxa.in/subject/2024-07-05-0.8025085370209641.jpeg",
  "https://appxcontent.kaxa.in/subject/2024-07-07-0.9522250790418232.png",
  "https://appxcontent.kaxa.in/subject/2024-07-05-0.3715048534115637.jpeg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === carouselItems.length - 1 ? 0 : prev + 1
      );
    }, 4500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="rounded-3xl p-6 flex flex-col justify-center items-center">
      <img
        src={carouselItems[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="object-contain md:w-[650px] rounded-3xl shadow-xl"
      />
      <div className="flex items-center justify-center gap-7 mt-9">
        {carouselItems.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-500 ease-linear ${
              index === currentIndex ? "bg-gray-400 scale-125" : "bg-slate-200"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
