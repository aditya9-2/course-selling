import CourseCard from "../components/CourseCard";
import { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();

  const fetchCourse = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/course/preview-Courses`
      );
      const data = response.data;

      if (data.courses && Array.isArray(data.courses)) {
        setCourses(data.courses);
      } else {
        setCourses([]);
      }
    } catch (err) {
      console.log(`Error While Finding the course: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <div className="h-auto py-18">
      <h1 className="text-3xl md:text-4xl mt-3 text-center font-semibold">
        All Available <span className="text-[#39229A]">Courses</span>
      </h1>

      {courses.length === 0 ? (
        <div className="h-screen flex justify-center mt-20">
          <p className="text-center text-3xl mt-4">No courses available.</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center gap-10 mt-4">
          {courses.map((course) => (
            <CourseCard
              key={course._id}
              onClick={() => navigate(`/course-details/${course._id}`)}
              img={course.imageUrl}
              title={course.title}
              subtitle={course.description}
              price={course.price}
              BtnLabel={"View Details"}
            />
          ))}
        </div>
      )}

      <div className="flex flex-wrap justify-center items-center gap-10 mt-4"></div>
    </div>
  );
};

export default Courses;
