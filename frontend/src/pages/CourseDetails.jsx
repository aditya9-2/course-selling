/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import { useEffect, useState } from "react";
import axios from "axios";

const CourseDetails = () => {
  const [course, setCourse] = useState(null);

  const { id } = useParams();

  const fetchSingleCourseData = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_BASE_URL
        }/api/v1/course/get-course-details/${id}`
      );
      const data = response.data;
      setCourse(data.course);

      console.log(`Course: ${JSON.stringify(data.course)}`);
    } catch (err) {
      console.log(`Error While feting individual course: ${err}`);
    }
  };
  useEffect(() => {
    if (id) {
      fetchSingleCourseData();
    }
  }, [id]);

  return (
    <div className="h-auto py-18 bg-slate-100">
      {course ? (
        <>
          <div className="h-40 md:h-70 bg-[#5A47AB]">
            <h1 className="text-3xl font-bold text-center pt-5 md:pt-8 text-[#F2F2F2]">
              Course Details for{" "}
              <span className="text-[#FBD15B]">{course.title}</span>
            </h1>
          </div>
          <div className="absolute top-65 md:top-43 left-9 md:left-270 ">
            <CourseCard
              img={
                "https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.07833836520330406.png"
              }
              title={course.title}
              subtitle={course.description}
              price={course.price}
              onClick={"click"}
              BtnLabel={"Buy Now"}
            />
          </div>
          <div className="mt-110 md:mt-0">
            <h2 className="text-4xl font-semibold p-10 text-[#5A47AB] text-center md:text-start">
              OverView
            </h2>
            <div className="bg-gray-300 h-0.5 w-56 md:w-[40rem] absolute right-20 md:right-210"></div>
            <p className="text-xl text-justify  p-10 text-gray-700   md:w-[64rem]">
              {course.description}
            </p>
          </div>
        </>
      ) : (
        <p className="text-center p-30">No data found</p>
      )}
    </div>
  );
};

export default CourseDetails;
