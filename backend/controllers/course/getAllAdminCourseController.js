import courseModel from "../../models/course.model.js";

const getAllAdminCourses = async (req, res) => {

    const adminId = req.admin.adminId;

    try {

        if (!adminId) {
            return res.status(400).json({
                message: "admin ID is required"
            });
        }

        const adminCourses = await courseModel.find({ adminId: adminId });

        if (!adminCourses) {
            return res.status(404).json({
                message: "No courses found for this admin"
            });
        }

        return res.status(200).json({
            message: "Successfully retrieved all courses",
            courses: adminCourses
        })

    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        })

    }
}

export default getAllAdminCourses;