import CourseCard from "../components/CourseCard";
import one from "../assets/course-Thumbnail/one.png";
const Dashboard = () => {
  const toggleCourse = () => {};
  return (
    <div className="h-auto py-18 px-9">
      <h1 className="text-3xl md:text-5xl py-4 px-7 font-semibold mb-6 mt-4">
        Welcome Back <span className="text-[#39229A]">Aditya</span>{" "}
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-10">
        <CourseCard
          onCLick={toggleCourse}
          img={one}
          title={"0-100 Cohort"}
          subtitle={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque aliquid excepturi sed vel porro sapiente?"
          }
        />
      </div>
    </div>
  );
};

export default Dashboard;
