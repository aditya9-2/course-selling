import CourseCard from "../components/CourseCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourse = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/course/preview-Courses`
      );
      const data = response.data;
      console.log(JSON.stringify(data));

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
              onClick={() => console.log(`Clicked ${course.title}`)}
              img={course.imageUrl} // Use course image
              title={course.title}
              subtitle={course.description}
              price={course.price}
            />
          ))}
        </div>
      )}

      <div className="flex flex-wrap justify-center items-center gap-10 mt-4"></div>
    </div>
  );
};

export default Courses;
