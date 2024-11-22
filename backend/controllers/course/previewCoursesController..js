import courseModel from "../../models/course.model.js";

const previewCourses = async (req, res) => {

  try {

    // Use projection to exclude the adminId field
    const allCourses = await courseModel.find({}, { adminId: 0 });// Excludes adminId from results

    if (allCourses.length === 0) {
      return res.status(404).json({
        message: "No courses are available",
      });

    }

    return res.status(200).json({
      message: "Retrieved all courses successfully",
      courses: allCourses
    });


  } catch (err) {

    return res.status(500).json({

      message: "Internal server error",
      error: err.message

    });
  }
}

export default previewCourses;