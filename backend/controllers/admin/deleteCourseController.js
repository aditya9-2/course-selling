import courseModel from "../../models/course.model.js";

const deleteCourse = async (req, res) => {

    const { courseId } = req.params;
    const { adminId } = req.admin;

    try {

        const course = await courseModel.findById(courseId);

        if (!courseId) {
            return res.status(400).json({
                message: "Course ID is required"
            });
        }

        if (!course) {
            return res.status(400).json({
                message: "Course doesn't exixst"
            });
        }

        if (course.adminId.toString() !== adminId) {
            return res.status(403).json({
                message: "Unothorized. You are not allowed to delete this course"
            });
        }

        await courseModel.deleteOne({
            _id: courseId
        });

        return res.status(200).json({
            message: "Course deleted successfully",
            id: courseId,
        });

    } catch (err) {

        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        })

    }

}

export default deleteCourse;