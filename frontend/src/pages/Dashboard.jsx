import { useNavigate } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();

  const getUserPurchase = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/course/all-user-courses`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data;

      if (data && Array.isArray(data.courses)) {
        setCourses(data.courses);
      } else {
        setCourses([]);
      }
    } catch (err) {
      console.log(`Error While Loading Courses: ${err}`);
    }
  };

  useEffect(() => {
    getUserPurchase();
  }, []);

  const toggleCourse = () => {
    navigate("/video");
  };

  return (
    <div className="h-auto py-18 px-9">
      <h1 className="text-3xl md:text-5xl py-4 px-7 font-semibold mb-6 mt-4">
        Welcome Back <span className="text-[#39229A]">Aditya</span>{" "}
      </h1>

      <div className="flex flex-wrap justify-center px-10 gap-10">
        {courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard
              key={course._id}
              title={course.courseId?.title}
              subtitle={course.courseId?.description}
              img={course.courseId?.imageUrl}
              price={course.price}
              onClick={toggleCourse}
              BtnLabel={"view Course"}
            />
          ))
        ) : (
          <h1>Hmm! Seems like you {"have'nt"} Buy Any Course </h1>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
