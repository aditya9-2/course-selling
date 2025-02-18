import Hero from "../components/Hero";
import HeroIcon from "../assets/hero_icon.svg";
import HomeCard from "../components/HomeCard";
import bag from "../assets/bag.png";
import group from "../assets/group.png";
import book from "../assets/book.png";
import pen from "../assets/pen.png";
import dollar from "../assets/dollar.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-auto pt-18 bg-[#F2F2F2s]">
      <Hero
        label={"Empower Your Education Journey with Course Arena"}
        sublabel={`Experience the future of education. Our innovative platform empowers
    learners and educators alike.`}
        image={HeroIcon}
      />

      <div className="p-4 pt-10">
        <h2 className="text-center text-4xl md:text-6xl text-[#5A47AB]">
          What we offer
        </h2>
        <p className="text-center leading-7 mt-2 text-gray-600 ">
          We offer students a personalized learning experience designed to help
          them succeed. Our platform provides easy access to course materials,
          assignments, and grades, all in one convenient location.{" "}
        </p>
        <div className="mt-4 flex justify-around gap-10 flex-wrap">
          <HomeCard
            heading={"Career-Ready Skills"}
            subHeading={
              "Gain practical skills and knowledge that directly apply to your professional growth"
            }
            icon={bag}
          />
          <HomeCard
            heading={"Active Community"}
            subHeading={
              "Join a vibrant community of learners for support and networking opportunities"
            }
            icon={group}
          />
          <HomeCard
            heading={"Interactive Content"}
            subHeading={
              "Access comprehensive video lessons and engaging learning materials"
            }
            icon={book}
          />
          <HomeCard
            heading={"Hands-on Practice"}
            subHeading={
              "Reinforce your learning with practical assignments and real-world projects"
            }
            icon={pen}
          />
          <HomeCard
            heading={"Money-Back Guarantee"}
            subHeading={
              "Risk-free enrollment with our 30-day satisfaction guarantee"
            }
            icon={dollar}
          />
        </div>
      </div>
      <div className="w-full h-62 bg-[#5A47AB] flex flex-col items-center px-3 py-6">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          Your Passion with the Perfect Course
        </h1>
        <div className="bg-[#FBD15B] h-0.5 md:h-1 w-96 md:w-[35rem] mt-3 rounded" />
        <p className="md:text-xl text-white mt-6 mb-10">
          Enroll today and take the next step toward your dream career
        </p>
        <Button
          label={"Courses"}
          width="w-46 md:w-62"
          onClick={() => navigate("/courses")}
        />
      </div>
    </div>
  );
};

export default Home;
