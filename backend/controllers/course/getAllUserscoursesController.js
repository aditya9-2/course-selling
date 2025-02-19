import purchasesModel from "../../models/purchases.model.js";

const getAlluserCourses = async (req, res) => {

    const userId = req.user.userId;

    try {

        if (!userId) {
            return res.status(400).json({
                message: "user ID is required"
            });
        }

        const userCourses = await purchasesModel.find({ userId: userId });

        if (userCourses.length === 0) {
            return res.status(404).json({
                message: "No courses found for this user"
            });
        }

        return res.status(200).json({
            message: "Successfully retrieved all courses",
            courses: userCourses
        })

    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        })

    }
}

export default getAlluserCourses;