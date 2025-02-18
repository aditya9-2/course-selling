import { useNavigate } from "react-router-dom";
import CourseCard from "../components/CourseCard";

const Dashboard = () => {
  const navigate = useNavigate();

  const toggleCourse = () => {
    navigate("/video");
  };
  return (
    <div className="h-auto py-18 px-9">
      <h1 className="text-3xl md:text-5xl py-4 px-7 font-semibold mb-6 mt-4">
        Welcome Back <span className="text-[#39229A]">Aditya</span>{" "}
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-10">
        <CourseCard
          onCLick={toggleCourse}
          img={""}
          title={"0-100 Cohort"}
          subtitle={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque aliquid excepturi sed vel porro sapiente?"
          }
          price={1200}
        />
      </div>
    </div>
  );
};

export default Dashboard;
