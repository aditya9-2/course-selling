import React from "react";

const About = () => {
  return (
    <div className="mt-10 h-fit rounded-3xl absolute  md:left-24 bg-gradient-to-r from-purple-100 to-orange-200">
      <div className="p-6 space-y-6">
        <h2 className="text-xl font-bold text-gray-900">
          Welcome to CourseNest.
        </h2>

        <p className="text-gray-900">
          This is an initiative by{" "}
          <span className="font-bold">Harkirat Singh</span> to personally mentor
          folks in the field of Programming.
        </p>

        <p className="text-gray-900">
          Harkirat strongly feels that today you are either a 1x engineer or a
          100x engineer and nothing in the middle, and his hope is to take
          everyone in this community to be a{" "}
          <span className="font-bold">100x Engineer</span>.
        </p>

        <p className="text-gray-900">
          Join him in his first course on Full Stack development with a heavy
          focus on Open source projects to learn programming practically.
        </p>
      </div>
    </div>
  );
};

export default About;
