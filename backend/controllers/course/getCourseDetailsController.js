import courseModel from "../../models/course.model.js";

const getCourseDetails = async (req, res) => {

    const { id } = req.params;
    console.log(id);

    try {
        if (!id) {
            res.status(404).json({
                message: "Course Id not Provided"
            });
            return;
        }

        const course = await courseModel.findById(id);

        if (!course) {
            res.status(404).json({
                message: "Course not found"
            });
            return;
        }

        return res.status(200).json({
            course
        });

    } catch (err) {
        return res.status(500).json({

            message: "Internal server error",
            error: err.message

        });
    }

}

export default getCourseDetails;